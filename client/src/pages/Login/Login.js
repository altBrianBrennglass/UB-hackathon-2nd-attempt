import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';
import sunriseLogo from '../../assets/sunriseLogo.svg';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import saveOnLogin from '../../Redux/actions';

const Login = ()=>{
    const [loginRegister, setLoginRegister] = useState('register');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const establishAccount = (e)=>{
        e.preventDefault();
        let response;
        if(loginRegister === 'login'){
            axios.post('http://localhost:5000/login', {email, password})
            .then(res=>{
                response = res.data
                dispatch(saveOnLogin(response));
                history.push('/main');
            })
            .catch(err=>console.log(err))
        }
        else{
            axios.post('http://localhost:5000/register', {email, password})
            .then(res=>{
                response = res.data
                dispatch(saveOnLogin(response));
                history.push('/main');
            })
            .catch(err=>console.log(err));
        }

    }
    return(
        <div className = 'screen'>
            <div className = 'left-side'>
                <img 
                    src = {sunriseLogo} 
                    alt = 'Sun Rise Logo' 
                    className = 'sunriseLogo'
                />
                <h1 className = 'sunriseTitle'>
                    SUN RISE
                </h1>
                <h3 className = 'sunriseSubtitle'>
                    Find out if your portfolio is 
                    Socially Responsible
                </h3>
            </div>

            <div className = 'right-side'>
                <form className = 'login_and_register_form'>
                    <div className = 'select-login-register'>
                        <h4 
                            className = {`login login-register ${loginRegister === 'login' && 'logRegUnderline'}`}
                            onClick = {()=>setLoginRegister('login')}
                        >       
                            Login
                        </h4>
                        <h4 
                            className = {`register login-register ${loginRegister === 'register' && 'logRegUnderline'}`}
                            onClick = {()=>setLoginRegister('register')}
                        >
                                Register
                        </h4>
                    </div>
                    <div className = 'formatInputs'>
                        <input 
                            className = 'loginInputs'
                            type = 'email'
                            placeholder = 'email'
                            value = {email}
                            onChange = {({target})=>setEmail(target.value)}
                            required
                        />

                        <input 
                            className = 'loginInputs'
                            type = 'password'
                            placeholder = 'password'
                            value = {password}
                            onChange = {({target})=>setPassword(target.value)}
                            required
                        />
                        <input 
                            className = 'loginInputs'
                            type = 'password'
                            placeholder = 'confirm password'
                            value = {confirmPassword}
                            onChange = {({target})=>setConfirmPassword(target.value)}
                            required
                        />
                    </div>
                    <button
                        className = 'loginRegisterButton'
                        onClick = {establishAccount}
                        disabled = {(confirmPassword !== password && loginRegister === 'register')}
                    >
                        SUBMIT
                    </button>
                </form> 
            </div>
        </div>
    )
}

export default Login