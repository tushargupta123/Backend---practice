const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        defaultValue: 0,
        min: 0,
        max: 5
    },
    images:[{
        type: String,
        required:true
    }],
    facilities:[{
        type: String,
    }],
    description:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    }
})

exports.Hotel = mongoose.model('Hotel',hotelSchema);