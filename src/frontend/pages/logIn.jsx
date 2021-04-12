import React from 'react'
import './styles/home.css';
import './styles/logIn.css';

function logIn() {
    return (
        <div className='border border_logIn'>
            <h2>Iniciar sesión</h2>
            <label className='login_label'>
                <input className='login_labelForm' type="email" name="" id=""/>
                <input className='login_labelForm' type="password" name="" id=""/>
                <input className='login_labelSubmit' type="submit" value="Aceptar"/>
                <div className="login_labelRemember">
                    <input type="checkbox" name="" id=""/>
                    <p>Recordar inicio de sesión</p>
                </div>
                <div className="login_auth0">
                <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>
                    <p>Iniciar sesión con Google</p>
                </div>
                <div className="login_auth0">
                <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    <p>Iniciar sesión con facebook</p>
                </div>
            </label>


            
        </div>
    )
}

export default logIn
