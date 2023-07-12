const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    totalRooms:{
        type:Number,
        required:true,
        defaultValue:1
    },
    hotel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hotel',
        required:true,
    },
    dateFrom:{
        type:Date,
        required:true,
    },
    dateTo:{
        type:Date,
        required:true,
    }
})

exports.Booking = mongoose.model('Booking',bookingSchema);