import React from 'react'
import './styles/home.css';
import './styles/logIn.css';

function singIn() {
    return (
        <div className='border border_logIn'>
            <h2>Crear cuenta</h2>
            <label className='login_label'>
                <input className='login_labelForm' placeholder='nombre y apellido' type="text" name="" id=""/>
                <input className='login_labelForm' placeholder='usuario' type="text" name="" id=""/>
                <input className='login_labelForm' placeholder='correo' type="email" name="" id=""/>
                <input className='login_labelForm' placeholder='contraseña' type="password" name="" id=""/>
                <div className="login_labelRemember">
                    <input type="checkbox" name="" id=""/>
                    <p>Aceto los términos y condiciones</p>
                </div>
                <input className='login_labelSubmit' type="submit" value="Aceptar"/>
                
                <div className="login_auth0">
                <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>
                    <p>Crear cuenta con Google</p>
                </div>
                <div className="login_auth0">
                <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    <p>Crear cuenta con facebook</p>
                </div>
            </label>


            
        </div>
    )
}

export default singIn