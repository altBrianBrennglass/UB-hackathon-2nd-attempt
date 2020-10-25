import SAVE_ON_LOGIN from './constants';

const saveOnLogin = (data) =>({
    type: SAVE_ON_LOGIN,
    data
})

export default saveOnLogin;