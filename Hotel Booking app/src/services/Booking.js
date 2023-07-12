const { Hotel } = require("../models/Hotels");
const { BookingRepository } = require("../repositories/Booking");

const bookingRepository = new BookingRepository();

class BookingService {
    async create(data){
        try{
            const partsFrom = data.dateFrom.split('-');
            const convertedDateFrom = partsFrom[1] + partsFrom[0] + partsFrom[2];
            const partsTo = data.dateTo.split('-');
            const convertedDateTo = partsTo[1] + partsTo[0] + partsTo[2];
            const hotel = await Hotel.findById(data.hotel);
            if(hotel.availability.get(convertedDateFrom) > data.totalRooms && hotel.availability.get(convertedDateTo) > data.totalRooms){
                hotel.availability.set(convertedDateFrom,hotel.availability.get(convertedDateFrom)-1)
                hotel.availability.set(convertedDateTo,hotel.availability.get(convertedDateTo)-1)
                await hotel.save();
                const booking = await bookingRepository.create(data);
                return booking;
            }else{
                return "hotel not available";
            }
        }catch(e){
            console.log("error from booking service");
            throw e;
        }
    }
    async update(id,data){
        try{
            const booking = await bookingRepository.update(id,data);
            return booking;
        }catch(e){
            console.log("error from booking service");
            throw e;
        }
    }
    async getById(data){
        try{
            const booking = await bookingRepository.getById(data);
            return booking;
        }catch(e){
            console.log("error from booking service");
            throw e;
        }
    }
    async destroy(data){
        try{
            // await bookingRepository.destroy(data);
            const booking = await bookingRepository.getById(data);
            console.log(booking.hotel.availability)
            // const hotel = await Hotel.findById(data.hotel);
            //     hotel.availability.set(convertedDateFrom,hotel.availability.get(convertedDateFrom)+1)
            //     hotel.availability.set(convertedDateTo,hotel.availability.get(convertedDateTo)+1)
            //     await hotel.save();
        }catch(e){
            console.log("error from booking service");
            throw e;
        }
    }
}

module.exports = BookingService;