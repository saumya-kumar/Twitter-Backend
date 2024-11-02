// const {mongoose} = require('mongoose');
import mongoose from 'mongoose';


const commentSchema = new mongoose.Schema({
    onModel : {
        type :  String,
        required : true,
        enum : ['Tweet','Comment']
    },
    commentable :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    },
    content:{
        type : String,
        required : true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        requird : true
    },
    comments :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ],
    likes :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Like'
        }
    ],
    

},{timestamps:true} );




const Comment = mongoose.model('Comment',commentSchema);

export default Comment;



