
const express = require('express');

const srv = express();

srv.use('/',express.static(__dirname + '/public'))


srv.listen(4000,()=> console.log("Server Started on http://localhost:4000"))