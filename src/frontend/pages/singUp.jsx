import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from "../actions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import './styles/home.css';
import './styles/logIn.css';

function singUp(props) {
    const [form, setValues] = useState({
        email: '',
        userId: '',
        fullName: '',
        password: '',
      });

      const updateInput = event => {
        setValues({
          ...form,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        props.registerUser(form, '/log-in');
      }
    
    return (
      <section className='login-container'>
          <article className='border border_logIn'>
            <h2>Crear cuenta</h2>
            <form className='login_label' onSubmit={handleSubmit}>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='nombre y apellido' type="text" name="fullName" id="" required/>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='usuario' type="text" name="userId" id="" required/>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='correo' type="email" name="email" id="" required/>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='contraseña' type="password" name="password" id="" required/>
                <div className="login_labelRemember">
                    <input type="checkbox" name="" id=""/>
                    <p>Aceto los términos y condiciones</p>
                </div>
                <input className='login_labelSubmit' type="submit" value="registrarse"/>
                <Link to="/login" className="register__container--login"></Link>
                <div className="login_auth0">
                <img src="https://img.icons8.com/fluent/48/000000/google-logo.png"/>
                    <p>Crear cuenta con Google</p>
                </div>
                <div className="login_auth0">
                <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    <p>Crear cuenta con facebook</p>
                </div>
            </form> 
        </article>

      </section>

    )
}
const mapDispatchToProps = {
    registerUser,
  };
  
  singUp.propTypes = {
    registerUser: PropTypes.func,
  };

  export default connect(null, mapDispatchToProps)(singUp);