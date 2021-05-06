import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

import './styles/home.css';
import './styles/logIn.css';

function logIn(props) {
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
    props.loginUser(form, '/home');
  };
  console.log(props.loginError);
  return (
    <section className='login-container'>
      <article className='border_logIn'>
        <div className='login-unauthorize' />
        <h2>Iniciar sesión</h2>
        <form className='login_label' onSubmit={handleSubmit}>
          <input className='login_labelForm' placeholder='correo' onChange={updateInput} type='email' name='email' id='' required />
          <input className='login_labelForm' placeholder='contraseña' onChange={updateInput} type='password' name='password' id='' required />
          <input className='login_labelSubmit' type='submit' value='Registrarse' required />
          <Link to='/' className='login_labelRemember '>¿Olvidaste la contraseña?</Link>
          <div className='login_labelRemember'>
            <input type='checkbox' name='' id='' />
            <p>Recordar inicio de sesión</p>
          </div>
        </form>
      </article>

    </section>
  );
}
const mapDispatchToProps = {
  loginUser,
};

logIn.propTypes = {
  loginUser: PropTypes.func,
};

// const mapStateToProps = state => {
//   return {
//     loginError: state.error
//   }
// }

export default connect(null, mapDispatchToProps)(logIn);
