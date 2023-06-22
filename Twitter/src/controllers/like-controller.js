import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async(req,res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId,req.query.modelType,req.query.userId);
        return res.status(200).json({
            success: true,
            message: 'successfully toggled a tweet',
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