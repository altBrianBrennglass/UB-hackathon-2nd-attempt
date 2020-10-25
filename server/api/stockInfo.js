const express = require('express');
const Alpaca = require('@alpacahq/alpaca-trade-api');

const alpaca = new Alpaca({
    keyId: 'PK4DLPY4YG95AAK2HCME',
    secretKey: 'NfElMNeh9p3JbUYVSFjuyGYj20AmJRwmoPS58bCd',
    paper: true,
    usePolygon: false
});

const route = express.Router();

route.get('/:symbol', (req, res)=>{
    const symbol = req.params.symbol;
    const barset = alpaca.getBars(
        'day',
        symbol,
        {
            limit: 1
        }
    ).then((barset) => {
        const bars = barset[symbol]
        res.json(...bars)
    })
})

module.exports = route;