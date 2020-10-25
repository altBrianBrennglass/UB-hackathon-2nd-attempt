const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const route = express.Router();

route.get('/:email', async (req, res)=>{
    const email = req.params.email;
    const userStocks = await User.findOne({email});
    if(userStocks)
        res.json(userStocks.stocks);
})

route.post('/:email', async (req, res)=>{
    const stock = req.body.stock;
    const email = req.params.email;
    const newStockList = await User.findOneAndUpdate({email},  { "$push": { stocks: stock} });
    if(newStockList)
        res.json(newStockList.stocks);
});

route.delete('/:email', async (req, res) =>{
    const email = req.params.email;
    const stock = req.body.stock;
    const newStockList = await User.findOneAndUpdate({email}, { $pullAll: { stocks: [ stock ] } } );
    if(newStockList)
        res.json(newStockList);
})

module.exports = route;