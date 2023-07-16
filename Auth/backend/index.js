const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const JWT = require('passport-jwt');
const { User } = require('./models/User');
const { authenticate } = require('./middleware/authenticate');
const cors = require('cors');
async function main(){
    await mongoose.connect('mongodb+srv://tushargupta2k3:tUshar%40123@twitter.fzbvq5v.mongodb.net/auth');
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());






const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'auth_secret'
}
app.use(passport.initialize());
passport.use(new JwtStrategy(opts,async(jwt_payload,done) => {
    const user = await User.findById(jwt_payload.id);
    if(!user){done(null,false)}
    else{done(null,user)}
}))






app.get('/',authenticate,(req,res)=>{
    res.status(200).json({message: "user is authenticated"})
})

app.use('/user',userRoutes)

main().catch(err => console.log(err))
app.listen('8080',() => {
    console.log("server started on port 8080");
    main();
    console.log("mongodb connected");
})