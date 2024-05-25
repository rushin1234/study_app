import React, { useState } from 'react';
import './Login.css'; // Import your CSS stylesheet
import { ID } from 'appwrite';
import { account } from '../../appwrite';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [action, setAction] = useState('Login')
    const navigate = useNavigate()
    const [isloading, setIsloading] = useState(false)
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const handleLogin = async () => {
        setIsloading(true)
        try {
            const session = await account.createEmailPasswordSession(
                email,
                password
            );
            navigate('/')
            toast('login successful')
        } catch (error) {
            toast.error(error.message)
        }
        setIsloading(false)
    };

    const handleSignup = async () => {
        setIsloading(true)
        try {
            const user = await account.create(
                ID.unique(),
                email,
                password
            );
            toast('Signup successful')
            handleLogin()
        } catch (error) {
            toast.error(error.message)
        }
        setIsloading(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (action === 'Login') {
            handleLogin();
        } else {
            handleSignup();
        }
    };

    return (
        <div className="login">
            <div className="wrapper">
                <div className="form-box login">
                    <h2>{action}</h2>
                    <form action="#" onSubmit={handleSubmit}>
                        {action === 'Login' ? <></> :
                            <div className="input-box">
                                <span className="icon"><ion-icon name="person"></ion-icon></span>
                                <input type="text" required onChange={e => setName(e.target.value)} value={name}/>
                                <label htmlFor="">Name</label>
                            </div>}
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail"></ion-icon></span>
                            <input type="email" required onChange={e => setEmail(e.target.value)} value={email}/>
                            <label htmlFor="">Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                            <input type="password" required onChange={e => setPassword(e.target.value)} value={password}/>
                            <label htmlFor="">Password</label>
                        </div>
                        {action === 'Login' ? <></> :
                            <div className="input-box">
                                <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
                                <input type="password" required onChange={e => setConfirmpassword(e.target.value)} value={confirmpassword}/>
                                <label htmlFor="">Confirm Password</label>
                            </div>}
                        {action === 'Login' ?
                            <div className="remember-forgot">
                                <label><input type='checkbox' />Remember me</label>
                                <a href="#">Forgot Password?</a>
                            </div> : <></>}
                            {isloading?<p className='loading-text'>Loading...</p>:<></>}
                        <button disabled={isloading} type='submit' className='btn'>{action}</button>
                        <div className="login-register">
                            {action === 'Register' ?
                                <p>Already have an account? <a onClick={() => setAction('Login')} href='#' className='register-link'>Login here</a></p> :
                                <p>Don't have an account? <a onClick={() => setAction('Register')} href="#" className='register-link'>Register</a></p>}
                        </div>
                    </form>
                </div>
            </div>


            <ToastContainer />
        </div>
    );
};

export default Login;
