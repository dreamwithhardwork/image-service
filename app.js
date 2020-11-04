const express = require('express');
const cors = require('cors');

var app = express();

/*below middlewear is responsible for attaching req.files, 
in case of not including this causes req object with undefided files*/
var uplod = require('express-fileupload');
app.use(cors());
app.use(uplod());
/*------------*/


module.exports = app;