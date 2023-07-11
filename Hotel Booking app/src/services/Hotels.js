const { HotelRepository } = require("../repositories/Hotels");

const hotelRepository = new HotelRepository();

class HotelService {
    async create(data){
        try{
            const hotel = await hotelRepository.create(data);
            return hotel;
        }catch(e){
            console.log("error from hotel service");
            throw e;
        }
    }
}

module.exports = HotelService;