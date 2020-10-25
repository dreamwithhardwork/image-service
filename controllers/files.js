const express = require('express');
const route =express.Router();
const fileOrchestrator = require('../util/fileUploader');
const {BUCKET_NAME} = require('../constants/constants');

route.post("/",(req,res)=>{
   fileOrchestrator.uploadFiles(req.files,BUCKET_NAME)
   .then((response)=>{
       res.status(200).send(response);
   })
   .catch((err)=>{
       console.log(err);
       res.status(500).send({"message":err});
   })
})

module.exports = route;

