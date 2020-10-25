const express = require('express');
var app = express();
const {Storage} = require('@google-cloud/storage');
const storage = new Storage();

app.get("/health",(req,res)=>{

    const result = await storage.getBuckets();
    const [buckets] = result;

    buckets.forEach((bucket) => {
        console.log(bucket.name);
    })

    res.status(200)
    .json({
        message:"Up and running"
    })
});



const server = app.listen(8080,()=>{
    console.log("listening on port 8080");
})