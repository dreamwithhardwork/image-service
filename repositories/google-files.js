const bucketRepo = require('./google-bucket');
const uuidGenerator = require('../util/filename-generator');
const stream = require('stream');


const upload = (bufferStream,fileName,bucketFile)=>{
    const promise = new Promise((resolve,reject)=>{
        try{
            bufferStream.pipe(
                bucketFile.createWriteStream({
                    resumable: false,
                    gzip: false,
                }).on('finish',()=>{
                    resolve(fileName);
                })
                .on('error',(err)=>{
                    reject(err);
                })
            )
        }
        catch(ex){
            reject(ex.message);
        }
    });

    return promise;
}

const addFile = async (file, bucketName) => {
    let bucket = await bucketRepo.getBucket(bucketName);
    var buffer = file.data;
    var bufferStream = stream.PassThrough();
    bufferStream.end(buffer);
    let fileName = "main/"+uuidGenerator() + ".png";
    const bucketFile = bucket.file(fileName);
    const promise = await upload(bufferStream,fileName,bucketFile);
    console.warn(fileName);
    bucket.file(fileName).makePublic();
    return promise;
}

const deleteFile = async (fileName, bucketName) => {
}

module.exports = { addFile: addFile, deleteFile: deleteFile }