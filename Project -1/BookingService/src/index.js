const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index');

const db = require('./models/index');

const startServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api',apiRoutes);

    app.listen(PORT,async() => {
        console.log("server started on port " + PORT);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    })
}

startServer();