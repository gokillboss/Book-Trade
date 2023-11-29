const express = require('express');


const test = express.Router();

test.get("/", (req, res) => {    
    res.send('test is good')
    //res.sendStatus(200);
});



module.exports = test;