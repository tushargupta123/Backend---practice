const {Hotel} = require("../models/Hotels");

class HotelRepository {
    async create(data){
        try{
            const hotel = new Hotel(data);
            hotel.save();
            return hotel;
        }catch(err){
            console.log("error from hotel repository");
            throw err;
        }
    }
}

module.exports = {HotelRepository};