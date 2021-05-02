import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from "../actions";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Fade } from 'react-bootstrap';
import { loginUser, CloseLogInError } from "../actions";


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
          <article className='border_logIn'>
            <div className="login-unauthorize">
            <Alert onClose={() => props.CloseLogInError()}  variant='danger' dismissible transition={Fade} show={props.loginError}>Este usuario ya existe</Alert>
            </div>
            <h2>Crear cuenta</h2>
            <form className='login_label' onSubmit={handleSubmit}>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='nombre y apellido' type="text" name="fullName" id="" required/>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='usuario' type="text" name="userId" id="" required/>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='correo' type="email" name="email" id="" required/>
                <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='contraseña' type="password" name="password" id="" required/>
                <div className="login_labelRemember">
                    <input type="checkbox" name="" id="" required/>
                    <p>Aceto los términos y condiciones</p>
                </div>
                <input className='login_labelSubmit' type="submit" value="Entrar"/>
                <Link to="/login" className="register__container--login"></Link>
            </form> 
        </article>

      </section>

    )
}
const mapDispatchToProps = {
    registerUser,
    CloseLogInError
  };
  
  singUp.propTypes = {
    registerUser: PropTypes.func,
  };
const mapStateToProps = state => {
  return {
    loginError: state.error
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(singUp);