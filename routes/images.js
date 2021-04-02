var multer = require('multer');
var express = require('express');
var router = express.Router();
var Image = require('../models/image');
var mongoose = require('mongoose');
var storage = multer.diskStorage({
  destination: function(req , file , cb){
    cb(null , './black-dashboard-react/public/uploads');
  },
  filename : function(req , file , cb){
    cb(null , file.originalname);
  }
});

var fileFilter = (req , file , cb)=>{
    if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
    {
      cb(null, true);
    }else{
      cb(new Error('invalid type of image'), false);
    }
  }

  var upload = multer(
    {storage : storage},
    {fileFilter: fileFilter}
    )

    router.get('/', function(req, res, next) {
        Image.find(function(err,data){
          res.status(200).json({
            message: 'get methode work',
            data
        }); 
        });
        
      });

      router.post('/', upload.single('myImage'),(req, res , next) =>{
        console.log(req.file);
          var image = new Image({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name ,
            myImage : req.file.filename
          });
          image.save().then(result =>{
            console.log(result);
          }).catch(err => console.log(err));
      
          res.status(201).json({
            message : "post image work",
            createdImage: image
          });
      });

module.exports = router;
