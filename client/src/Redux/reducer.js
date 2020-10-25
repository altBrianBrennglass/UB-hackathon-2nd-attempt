import SAVE_ON_LOGIN from './constants';

const reducer = (state, action)=>{
    switch(action.type){
        case SAVE_ON_LOGIN:
            return Object.assign({}, {user: {email: action.data}});
        default:
            return state;
    }
}

export default reducer;