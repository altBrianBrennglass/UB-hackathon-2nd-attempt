const express = require('express');
const User = require('../models/user');
const route = express.Router();

route.post('/', async(req, res)=>{
    const {email, password} = req.body;
    const isLoggedIn = await User.findOne({email});
    if(!isLoggedIn)res.json(false);
    if(isLoggedIn.password === password)
        res.json({email, stocks: isLoggedIn.stocks});
    else    
        res.json(false);
})

module.exports = route;