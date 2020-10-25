const {Storage} = require('@google-cloud/storage');

const storage = new Storage();

const createBucket = async (bucketName,projectId) => {
}

const getBucket =  async (bucketName,projectId) => {
      let bucket= storage.bucket(bucketName);
      try{
             await bucket.get({autoCreate:true});
      }
      catch(ex){
      console.log(ex);
      }
      return bucket
}

const deleteBucket = async (bucketName,projectId) => {
        storage.deleteBucket(bucketName);
}


module.exports = {createBucket:createBucket,deleteBucket:deleteBucket,getBucket:getBucket}