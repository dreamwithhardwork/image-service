const fileRepository = require('../repositories/google-files');
const {GOOGLE_BUCKET_URL} = require('../constants/constants');

const uploadFiles =   (files, bucketName) => {
    const response = {};
    const promise = new Promise(async (resolve, reject) => {
        try {
            for (file in files) {
                let fileName = await fileRepository.addFile(files[file], bucketName);
                fileName = GOOGLE_BUCKET_URL +bucketName + "/" + fileName;
                response[file] = fileName;
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