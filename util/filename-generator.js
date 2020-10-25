var uuid = require('uuid/v4');

const getUniqueId = ()=>{
    return uuid();
}


module.exports = getUniqueId;