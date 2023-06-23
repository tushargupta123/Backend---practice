import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id)
            .populate({
                path:'comments',
                populate:{
                    path: 'comments'
                }
            }).lean();         // populate means instead of printing objectId print whole object       , lean gets normal object instead of mongoose object
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offset,limit){             // pagination
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'likes'});
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
}

export default TweetRepository;