const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    email: String,
    password: String,
    stocks: Array
})

const model = mongoose.model('user', user);

module.exports =  model;