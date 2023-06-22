import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;


// tweetSchema.virtual('contentWithEmail').get(function process(){     //this creates the field in runtime only
//     return `${this.content} \n Created by : ${this.userEmail}`;
// })

// tweetSchema.pre('save',function(next){          // hooks
//     console.log("inside a hook");
//     next();
// })