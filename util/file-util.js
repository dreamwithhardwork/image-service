const bucketName = (req)=>{
    const body = req.body;
    body===undefined||body.storeId===undefined? (()=>{throw "StoreId cannot be empty"})():null;
    return body.storeId;
}


module.exports = {bucketName:bucketName}