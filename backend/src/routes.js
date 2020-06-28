const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/upload', upload.single('thumbnail'),(req,res)=>{res.json({message:"ok"})});

module.exports = routes;