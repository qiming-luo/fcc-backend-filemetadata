const express = require('express');
const router = express.Router();
const multer = require('multer');
require('dotenv').config()

// config multer storage
const uploadStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, process.env.UPLOAD_STORE);
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage: uploadStorage});

// router parent path: /api
router.post('/fileanalyse', upload.single('upfile'), (req, res)=>{
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });
})

module.exports = router;

