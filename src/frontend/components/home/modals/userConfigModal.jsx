import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { configUser } from '../../../actions';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function userConfigModal(props) {
  const { fullName, userId, email } = props.userAcconut;
  const { config } = props.modals;
  const { configUser, id } = props;
  const [user, SetUser] = useState({
    fullName: '',
    userId: '',
    email: '',
    password: '',
    id,
  });
  const handleChange = (e) => {
    SetUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <MainModal display={config}>
      <h3>Ajustes de la cuenta</h3>
      <form className='userModal-conatiner'>
        <h5>Si deja un campo vacio este no se modificará</h5>
        <p>{userId}</p>
        <input name='userId' onChange={(e) => handleChange(e)} placeholder='usuario' type='text' className='userModal-input' />
        <p>{fullName}</p>
        <input name='fullName' onChange={(e) => handleChange(e)} placeholder='nombre y apellido' type='text' className='userModal-input' />
        <p>{email}</p>
        <input name='email' onChange={(e) => handleChange(e)} placeholder='correo' type='email' className='userModal-input' />
        <p>Nueva contraseña</p>
        <input name='password' onChange={(e) => handleChange(e)} placeholder='nueva contraseña' type='password' className='userModal-input' />
        <Link to='/home' onClick={() => configUser(user, '/home')} className='userModal-input userModal-submit'>Guardar</Link>
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => {
  return {
    userAcconut: state.userAcconut,
    modals: {
      config: state.modals.config,
    },
    id: state._id,
  };
};
const mapDispachToProps = {
  configUser,
};
// eslint-disable-next-line react/no-typos
userConfigModal.PropTypes = {
  configUser: PropTypes.func,
};
export default connect(mapStateToProps, mapDispachToProps)(userConfigModal);
