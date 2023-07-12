const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    ratings: [{
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    }],
    comments: [{
      type: String,
    }],
    images: [{
      type: String,
      required: true,
    }],
    facilities: [{
      type: String,
    }],
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    availability: {
      type: Map,
      of: Number,
      required: true,
      default: {},
    },
  });

const virtual = hotelSchema.virtual('rating');
virtual.get(function() {
    let sum = 0.0;
    for(let i=0;i<this.ratings.length;i++) {
        sum+=this.ratings[i];
    }
    return sum/this.ratings.length;
})

hotelSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc,ret){
        delete ret.ratings
    }
})

exports.Hotel = mongoose.model('Hotel',hotelSchema);