import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import './Search.css';
const Search = ()=>{
    const [queryResponse, setQueryResponse] = useState();
    const [query, setQuery] = useState('');
    const email = useSelector(state=>state.user.email);
    console.log(email);
    const follow = (symbol)=>{
        axios.post(`http://localhost:5000/followStock/${email}`,{stock: symbol})
        .then(res=>console.log(res.data));
    }
    useEffect(()=>{
        try{
            axios.get(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=5&apikey=demo`)
            .then(res=>setQueryResponse(res.data))
        }
        catch{
            setQuery(false);
        }
    }, [query])

    return(
    <div className = 'Search'>
            <h1 className = "Search-Title">Search For Stocks</h1>
            <div className = 'barAndTable'>
                <div className = 'bar'>
                    <input
                        className = 'loginInputs queryInput'
                        maxLength = {10}
                        placeholder = 'Search for companies'
                        value = {query}
                        onChange = {({target})=>setQuery(target.value)}
                    />
                </div>
                <div className = 'results'>
                <div className = 'queryResponse'>
                    {queryResponse && 
                        <table className = 'searchTable'>
                            <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>Name</th>
                                    <th>Exchange</th>
                                    <th>Follow</th>
                                </tr>
                            </thead>
                            <tbody>
                            {queryResponse.map(stock=>  
                                        <tr key = {stock.symbol}>
                                            <td className = 'td'><span className = 'stock-symbol'>{stock.symbol} </span></td>
                                            <td className = 'td'><span className = 'stock-symbol'>{stock.name} </span></td>
                                            <td className = 'td'><span className = 'stock-symbol'>{stock.stockExchange}</span></td>
                                            <td className = 'td' onClick = {()=>follow(stock.symbol)}><span className = 'stock-symbol follow'>Follow</span></td>
                                        </tr>
                            )}
                            </tbody>
                        </table>    
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Search;