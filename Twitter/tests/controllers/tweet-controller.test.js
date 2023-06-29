import {getTweet} from "../../src/controllers/tweet-controller";
import TweetService from "../../src/services/tweet-service";
import { mockResponse, mockResquest } from "../mocker";

jest.mock('../../src/services/tweet-service')

test('should return tweets',async() => {
    const req = mockResquest();
    const res = mockResponse();
    const response = [
        {
            content: 'Tweet 1'
        },
        {
            content: 'Tweet 2'
        },
    ]
    await getTweet(req,res);
    (TweetService.prototype.get).mockReturnValue(response);
    await getTweet(req,res);
    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'successfully fetched a  tweet',
        data: response,
        err: {}
    })
})