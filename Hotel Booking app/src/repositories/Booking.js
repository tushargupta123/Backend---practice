const { Booking } = require("../models/Booking");

class BookingRepository {
  async create(data) {
    try {
      const booking = new Booking(data);
      booking.save();
      return booking;
    } catch (err) {
      console.log("error from booking repository");
      throw err;
    }
  }

  async update(id,data) {
    try {
      const booking = await Booking.findByIdAndUpdate(id,data,{new:true});
      return booking;
    } catch (err) {
      console.log("error from booking repository");
      throw err;
    }
  }
  async getById(data) {
    try {
      const booking = await Booking.findById(data).populate('hotel').lean();
      const totalPrice = booking.hotel.price * booking.totalRooms;
      return {...booking, totalPrice};
    } catch (err) {
      console.log("error from booking repository");
      throw err;
    }
  }
  async destroy(data) {
    try {
      await Booking.findByIdAndDelete(data);
    } catch (err) {
      console.log("error from booking repository");
      throw err;
    }
  }

}

module.exports = { BookingRepository };
