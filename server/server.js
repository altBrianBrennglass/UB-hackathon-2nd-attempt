const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const stockInfo = require('./api/stockInfo');
const followStock = require('./api/followStock');
const login = require('./api/login');
const register = require('./api/register');

mongoose.connect('mongodb+srv://richrich:Zhxy8yGA87Arzlx2@cluster0.lua7i.mongodb.net/richrich?retryWrites=true&w=majority', { useUnifiedTopology: true })
.then(isConnected => console.log('connected'))


const app = express();
app.use('/', express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/stockInfo', stockInfo);
app.use('/followStock', followStock);
app.use('/login', login);
app.use('/register', register);

app.listen(8080, ()=>console.log('listening'))