import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import admin from '../data/admin';
import Home from './Home';
const Login = () => {
    const [username, setUser] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsername = (e) => {
        setUsernameError('')
        setUser(e.target.value)
    }
    const handlePassword = (e) => {
        setPasswordError('')
        setPassword(e.target.value)
    }

    const authenticationLogin = (e) => {
        e.preventDefault();
        if (username !== "") {
            
            if (username === admin[0].username) {
               
                setUsernameError('')
                if (password === admin[0].password) {
                   
                    localStorage.setItem('password', admin[0].password) // info set to localStorage
                    localStorage.setItem('username', admin[0].username)
                    localStorage.setItem('name', admin[0].name)
                    window.location.assign('/')
                }
                else {
                    setPasswordError('Password is incorrect')
                }
            }
            else {
                setUsernameError('Username is incorrect')
            }

        }
        else {
            setUsernameError('UserName Required')
        }
        if (password === '') {
            setPasswordError('Password Required')
        }
    }
    const getUserName = localStorage.getItem('username')
    const getPassword = localStorage.getItem('password')
 
    return (
        <div className='container '>
            {
                 getUserName && getPassword ? <Home/>:
                <div className='mt-5 mx-auto p-3 p-md-5 sign_form '>
                    <div className='sign_head mb-5'>
                        <h5 className='text-center'>Login</h5>
                        <p className='text-center mt-3'>Enter Login details to get access</p>
                    </div>
                    <form  onSubmit={authenticationLogin}>
                    {usernameError && <div className='alert alert-danger'>{usernameError}</div>}
                    {passwordError && <div className='alert alert-danger'>{passwordError}</div>}
                        <div className="mb-3">
                            <label className="form-label">Username Or Email Address</label>
                            <input type="text" className="form-control rounded-0" onChange={handleUsername} placeholder='Username / Email adress' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control rounded-0" onChange={handlePassword} placeholder='Enter Password' />
                           
                        </div>
                        <div className='d-flex justify-content-between flex-column flex-md-row mt-4'>
                            <div className="mb-3 form-check" id='form_checked'>
                                <input type="checkbox" className="form-check-input me-3" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Keep Me Logged In</label>
                            </div>
                            <Link to="#" id='forgot_password'>Forgot Password?</Link>
                        </div>

                        <div className='d-flex justify-content-between flex-column flex-md-row mt-5 form_bottom'>
                            <p>Don’t have an account? <Link to="/signup" id='signup'>Sign Up</Link> here</p>
                            <button type="submit" className="btn rounded-0">Login</button>
                        </div>

                    </form>

                </div>
            }
        </div>
    )
}

export default Login