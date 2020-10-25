const express = require('express');
const User = require('../models/user');
const route = express.Router();

route.post('/', async(req, res)=>{
    const {email, password} = req.body;
    const isOldUser = await User.findOne({email});
    if(isOldUser){
        res.json(false);
        return;
    }
    const newUser = new User({email, password, stock: []})
    const isRegistered = await newUser.save({email, password});
    if(isRegistered)
        res.json(email);
    else    
        res.json(false);
})

module.exports = route;