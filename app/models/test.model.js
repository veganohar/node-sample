const mongoose = require('mongoose');

const Test = mongoose.model(
    'Test',
    new mongoose.Schema({
        name:String,
        phone:Number,
        city:String,
        isActive:Boolean
    })   
);

module.exports = Test;