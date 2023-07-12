const { Hotel } = require("../models/Hotels");

class HotelRepository {
  async create(data) {
    try {
      const hotel = new Hotel(data);
      hotel.save();
      return hotel;
    } catch (err) {
      console.log("error from hotel repository");
      throw err;
    }
  }

  async update(id,data) {
    try {
      const hotel = await Hotel.findByIdAndUpdate(id,data,{new:true});
      return hotel;
    } catch (err) {
      console.log("error from hotel repository");
      throw err;
    }
  }
  async getAll(data) {
    try {
      const query = {};

      if (data.city) {
        query["address.city"] = data.city;
      }

      if (data.state) {
        query["address.state"] = data.state;
      }

      const hotels = await Hotel.find(query);
      return hotels;
    } catch (err) {
      console.log("error from hotel repository");
      throw err;
    }
  }

  async makeComment(data){
    try {
        const hotel = await Hotel.findById(data.id);
        hotel.comments.push(data.content);
        await hotel.save();
        return hotel;
      } catch (err) {
        console.log("error from hotel repository");
        throw err;
      }
  }

  async rate(data){
    try {
        const hotel = await Hotel.findById(data.id);
        hotel.ratings.push(data.rating);
        await hotel.save();
        return hotel;
      } catch (err) {
        console.log("error from hotel repository");
        throw err;
      }
  }
}

module.exports = { HotelRepository };
