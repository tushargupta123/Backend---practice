const BookingService = require("../services/Booking");

const bookingService = new BookingService();

exports.create = async(req,res) => {
    try {
        const response = await bookingService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'successfully created a booking',
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
        const response = await bookingService.update(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            message: 'successfully updated a booking',
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
exports.getById = async(req,res) => {
    try {
        const response = await bookingService.getById(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'successfully fetched the booking',
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
exports.destroy = async(req,res) => {
    try {
        const response = await bookingService.destroy(req.params.id);
        return res.status(200).json({
            success: true,
            message: 'successfully deleted the booking',
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