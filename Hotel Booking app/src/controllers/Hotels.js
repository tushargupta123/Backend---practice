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
exports.update = async(req,res) => {
    try {
        const response = await hotelService.update(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: 'successfully update a hotel',
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
exports.getAll = async(req,res) => {
    try {
        const response = await hotelService.getAll(req.query);
        return res.status(200).json({
            success: true,
            message: 'successfully fetched all hotels',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'somthing went wrong',
            data: {},
            err: error
        })
    }
}
exports.makeComment = async(req,res) => {
    try {
        const response = await hotelService.makeComment(req.body);
        return res.status(200).json({
            success: true,
            message: 'successfully commented on hotel',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'somthing went wrong',
            data: {},
            err: error
        })
    }
}
exports.rate = async(req,res) => {
    try {
        const response = await hotelService.rate(req.body);
        return res.status(200).json({
            success: true,
            message: 'successfully reated on hotel',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'somthing went wrong',
            data: {},
            err: error
        })
    }
}