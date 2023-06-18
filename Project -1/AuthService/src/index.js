const express = require('express');

const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();

const prepareAndStart = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT,()=> {
        console.log("server started on port " + PORT);
    })
}

prepareAndStart();