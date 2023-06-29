import Tweet from '../../src/models/tweet.js'
import TweetRepository from "../../src/repository/tweet-repository.js";

jest.mock('../../src/models/tweet.js');

describe('create tweet tests',() => {

    test('should create a new tweet and return it',async() => {
        const data = {
            content: 'testing tweet'
        }
        const spy = jest.spyOn(Tweet,'create').mockImplementation(() => {
            return {...data,createdAt: '2023-06-27',updatedAt: '2023-06-27'}
        })
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
    })
    
    test('should not create a tweet and throw exception',async()=>{
        const data = {
            content: 'testing tweet'
        }
        const spy = jest.spyOn(Tweet,'create').mockImplementation(() => {
            throw new Error('something went wrong');
        })
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data).catch(err => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('something went wrong');
        });
    })
})

test('get all tweet tests',async() => {
    const data = {
        content: 'testing tweet'
    }
    const tweetsArray = [{...data,createdAt: '2023-06-27',updatedAt: '2023-06-27'},{...data,createdAt: '2023-06-27',updatedAt: '2023-06-27'},{...data,createdAt: '2023-06-27',updatedAt: '2023-06-27'}];
    const findResponse = {tweetsArray};
    findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0,limit));
    findResponse.skip = jest.fn((offset) => findResponse);
    const spy = jest.spyOn(Tweet,'find').mockImplementation(() => {
        return findResponse;
    })
    const tweetRepository = new TweetRepository();
    const tweets = await tweetRepository.getAll(0,2);
    expect(spy).toHaveBeenCalled();
    expect(tweets).toHaveLength(2);
})