const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hotelRoutes = require('./src/routes/Hotels');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

async function main() {
    await mongoose.connect("mongodb+srv://tushargupta2k3:tUshar%40123@twitter.fzbvq5v.mongodb.net/");
  }
  
main().catch((err) => console.log(err));

app.use('/hotels',hotelRoutes)

app.listen(3000,async() => {
    console.log("server started on port 3000");
    main()
    console.log("mongodb connected")
})