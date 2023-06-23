import TweetService from "../services/tweet-service.js";
const tweetService = new TweetService();

export const createTweet = async(req,res) => {
    try {
        // singleUploader(req,res,function(err,data) {
        //     if(err){
        //         return res.status(500).json({error:err})
        //     }
        //     console.log("image url is : ",req.file)
        // })
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'successfully created a new tweet',
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
export const getTweet = async(req,res) => {
    try {
        const response = await tweetService.get(req.query.id);
        return res.status(200).json({
            success: true,
            message: 'successfully fetched a  tweet',
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