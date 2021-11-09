var express = require('express');
var router = express.Router();
var Controllers = require("../controllers");
Controllers.timelineController.connect()

router.get('/posts', function(req,res,next){
    Controllers.timelineController.getPosts(req,res)
})
router.post('/posts', function(req,res,next){
    Controllers.timelineController.postPost(req, res)
})
module.exports = router;