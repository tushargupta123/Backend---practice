import {TweetRepository,HashtagRepository} from '../repository/index.js';

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tweet = await this.tweetRepository.create(data);
        if(content.match(/#[a-zA-Z0-9_]+/g)){
            let tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase());
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            const titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
            newTags = newTags.map(tag => {return {title: tag,tweets :[tweet.id]}});
            await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            })
        }
        return tweet;
    }

    async get(tweetId){
        try {
            const tweet = await this.tweetRepository.getWithComments(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetService;