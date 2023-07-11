const HotelService = require("../services/Hotels");

const hotelService = new HotelService();

exports.create = async(req,res) => {
    try {
        const response = await hotelService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'successfully created a hotel',
            data: response,
            err: {}
        })
    } catch (error) {
    console.log(error)
        return res.status(500).json({
            success: false,
            message: 'somthing went wrong',
            data: {},
            err: error
        })
    }
}