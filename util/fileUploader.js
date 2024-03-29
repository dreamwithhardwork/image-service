const fileRepository = require('../repositories/google-files');
const {GOOGLE_BUCKET_URL} = require('../constants/constants');

const uploadFiles =   (files, bucketName,body) => {
    const response = {};
    const promise = new Promise(async (resolve, reject) => {
        try {
            if(files.files instanceof Array){
                for (file in files) {
                    let filesArray = files[file];
                    for (f in filesArray){
                        console.log(filesArray[f]);
                        let fileName = await fileRepository.addFile(filesArray[f], bucketName,body);
                        fileName = GOOGLE_BUCKET_URL +bucketName + "/" + fileName;
                        response[filesArray[f].name] = fileName;
                    }
                    
                }
            }
            else{
                        let fileName = await fileRepository.addFile(files.files, bucketName,body);
                        fileName = GOOGLE_BUCKET_URL +bucketName + "/" + fileName;
                        response[files.files.name] = fileName;
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