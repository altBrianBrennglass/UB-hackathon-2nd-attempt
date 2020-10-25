import reducer from './reducer';
import state from './state';
import {createStore} from 'redux'

const store = createStore(reducer, state);

export default store;