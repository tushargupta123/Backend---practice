import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        reuired:true
    },
    userEmail:{
        type:String
    },
},{timestamps:true});

const Comment = mongoose.model('Comment',commentSchema);
export default Comment;