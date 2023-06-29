const mongoose = require('mongoose');

const connect = async() => {
    await mongoose.connect("mongodb+srv://tushargupta2k3:tUshar%40123@twitter.fzbvq5v.mongodb.net/");
}

module.exports = connect;