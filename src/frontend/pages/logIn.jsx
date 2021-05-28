import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser, logInError } from '../actions';

import './styles/home.css';
import './styles/logIn.css';

function logIn(props) {
  const { loginUser, logInError, error } = props;
  const [form, setValues] = useState({
    email: '',
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
    loginUser(form, '/home');
  };
  const handleDemo = (event) => {
    event.preventDefault();
    loginUser({ email: 'b@gmail.com', password: '1' }, '/home');
  };
  return (
    <section className='login-container'>
      <article className='border_logIn'>
        <div className='login-unauthorize-container'>
          <div className='login-unauthorize' style={{ display: error ? 'flex' : 'none' }}>
            <h3>Usuario o contraseña incorrecta</h3>
            <button type='button' className='login-close' onClick={() => logInError(false)}>
              <i aria-hidden className='fas fa-times' />
            </button>
          </div>
        </div>
        <h2>Iniciar sesión</h2>
        <form className='login_label' onSubmit={handleSubmit}>
          <input className='login_labelForm' placeholder='correo' onChange={updateInput} type='text' name='email' />
          <input className='login_labelForm' placeholder='contraseña' onChange={updateInput} type='password' name='password' />
          <input className='login_labelSubmit' type='submit' value='Ingresar' />
          <button className='login_labelSubmit' type='submit' onClick={handleDemo}>Demo</button>
          <Link to='/' className='login_labelRemember '>¿Olvidaste la contraseña?</Link>
          <Link to='/sing-up' className='login_labelRemember '>Registrate aquí</Link>
        </form>
      </article>

    </section>
  );
}
const mapDispatchToProps = {
  loginUser,
  logInError,
};

logIn.propTypes = {
  loginUser: PropTypes.func,
  logInError: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(logIn);
