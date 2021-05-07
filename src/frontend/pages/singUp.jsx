import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser, logInError } from '../actions';

import './styles/logIn.css';

function singUp(props) {
  const { registerUser, logInError, error } = props;
  const [form, setValues] = useState({
    email: '',
    userId: '',
    fullName: '',
    password: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(form, '/log-in');
  };

  return (
    <section className='login-container'>
      <article className='border_logIn'>
        <div className='login-unauthorize-container'>
          <div className='login-unauthorize' style={{ display: error ? 'flex' : 'none' }}>
            <h3>Este usuario ya esta registrado</h3>
            <button type='button' className='login-close' onClick={() => logInError(false)}>
              <i className='fas fa-times' aria-hidden />
            </button>
          </div>
        </div>
        <h2>Crear cuenta</h2>
        <form className='login_label' onSubmit={handleSubmit}>
          <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='nombre y apellido' type='text' name='fullName' id='fullName' required />
          <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='usuario' type='text' name='userId' id='userId' required />
          <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='correo' type='email' name='email' idemail required />
          <input className='login_labelForm' onChange={(e) => updateInput(e)} placeholder='contraseña' type='password' name='password' id='password' required />
          <div className='login_labelRemember'>
            <input type='checkbox' name='' id='checkbox' required />
            <p>Aceto los términos y condiciones</p>
          </div>
          <input className='login_labelSubmit' type='submit' value='Entrar' />
          <Link to='/login' className='register__container--login' />
        </form>
      </article>

    </section>

  );
}
const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};
const mapDispatchToProps = {
  registerUser,
  logInError,
};

singUp.propTypes = {
  registerUser: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(singUp);
