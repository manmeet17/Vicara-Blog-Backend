var express = require('express');
var router = express.Router();
var blog=require('../models/post');

router.get('/',function(req,res){
  blog.find({}).sort({createdAt:-1}).exec(function(err,posts){
    if(err) throw err;
    console.log(posts);
    res.json(posts);
  });
});

router.get('/posts/:id',function(req,res){
  var id=req.params.id;

  blog.findById(id,function(err,post){
    if(err) throw err;
    res.json(post);
  });
});



module.exports = router;
