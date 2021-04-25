import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from "../actions";

import './styles/home.css';
import './styles/logIn.css';
function logIn(props) {
    const [form, setValues] = useState({
        email: '',
        id: '',
        name: '',
      });

      const updateInput = event => {
        setValues({
          ...form,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.loginUser(form, '/');
      }
    return (
        <section className='border border_logIn' >
            <h2>Iniciar sesión</h2>
            <form className='login_label' >
                <input className='login_labelForm' placeholder='correo' onChange={updateInput} type="email" name="" id="" required/>
                <input className='login_labelForm' placeholder='contraseña' onChange={updateInput} type="password" name="" id="" required/>
                <input className='login_labelSubmit' type="submit" value="Registrarse" required/>
                <Link to='/' className="login_labelRemember ">¿Olvidaste la contraseña?</Link>
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
            </form>
        </section>
    )
}
const mapDispatchToProps = {
    loginUser,
  };
  
  logIn.propTypes = {
    loginUser: PropTypes.func,
  };
  
  export default connect(null, mapDispatchToProps)(logIn);
