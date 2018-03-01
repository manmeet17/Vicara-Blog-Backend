var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var postSchema=new Schema({
    title: String,
    author: String,
    content: String,
    comments: [{body: String, date: Date}],
    createdAt: {type: Date, default: Date.now},
    hidden: Boolean,
    meta: {
        likes: Number,
        shares: Number
    }
});

var Post=mongoose.Model('Post',postSchema);
module.exports=Post;