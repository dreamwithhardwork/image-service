const fileRepository = require('../repositories/google-files');
const {GOOGLE_BUCKET_URL} = require('../constants/constants');

const uploadFiles =   (files, bucketName) => {
    const response = {};
    const promise = new Promise(async (resolve, reject) => {
        try {
            for (file in files) {
                let filesArray = files[file];
                for (f in filesArray){
                    console.log(filesArray[f]);
                    let fileName = await fileRepository.addFile(filesArray[f], bucketName);
                    fileName = GOOGLE_BUCKET_URL +bucketName + "/" + fileName;
                    response[filesArray[f].name] = fileName;
                }
                
            }
            resolve(response);
        }
        catch (ex) {
            reject({code:ex.code,message:ex});
        }

    })
    return promise;
}

module.exports = {uploadFiles:uploadFiles}