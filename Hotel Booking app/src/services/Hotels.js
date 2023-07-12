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
    async update(id,data){
        try{
            const hotel = await hotelRepository.update(id,data);
            return hotel;
        }catch(e){
            console.log("error from hotel service");
            throw e;
        }
    }
    async getAll(data){
        try{
            const hotel = await hotelRepository.getAll(data);
            return hotel;
        }catch(e){
            console.log("error from hotel service");
            throw e;
        }
    }
    async makeComment(data){
        try{
            const hotel = await hotelRepository.makeComment(data);
            return hotel;
        }catch(e){
            console.log("error from hotel service");
            throw e;
        }
    }
    async rate(data){
        try{
            const hotel = await hotelRepository.rate(data);
            return hotel;
        }catch(e){
            console.log("error from hotel service");
            throw e;
        }
    }
}

module.exports = HotelService;