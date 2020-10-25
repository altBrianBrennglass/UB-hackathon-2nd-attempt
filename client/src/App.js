import React from 'react';
import Login from './pages/Login/Login';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './Redux/store';
import './App.css';
import Main from './pages/Main/Main'

function App() {
  return (
    <div className="App">
        <Provider store = {store}>
          <BrowserRouter>
            <Switch>
              <Route path = '/' exact component = {Login} />
              <Route path = '/Main' exact component = {Main} />
            </Switch>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
