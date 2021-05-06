import React from 'react';
import { connect } from 'react-redux';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function userConfigModal(props) {
  const { fullName, userId, email } = props.userAcconut;
  const { modals: { config } } = props;
  return (
    <MainModal display={config}>
      <h3>Ajustes de la cuenta</h3>
      <form className='userModal-conatiner'>
        <h5>Si deja un campo vacio este no se modificará</h5>
        <p>{userId}</p>
        <input placeholder='usuario' type='email' className='userModal-input' />
        <p>{fullName}</p>
        <input placeholder='nombre y apellido' type='text' className='userModal-input' />
        <p>{email}</p>
        <input placeholder='correo' type='text' className='userModal-input' />
        <p>Introduce tu contraseña actual y luego la nueva</p>
        <input placeholder='contraseña actual' type='password' className='userModal-input' />
        <input placeholder='nueva contraseña' type='text' className='userModal-input' />
        <input value='Guardar' type='submit' className='userModal-input userModal-submit' />
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
  };
};
export default connect(mapStateToProps, null)(userConfigModal);
