import React from 'react';
import { connect } from 'react-redux';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function depositModal(props) {
  const { ammount } = props;
  const { modals: { deposit } } = props;
  return (
    <MainModal display={deposit}>
      <h3>Depósito</h3>
      <form className='userModal-conatiner'>
        <h3>{ammount}</h3>
        <p>Ingresa el total a depositar</p>
        <input type='number' className='userModal-input' />
        <input type='submit' className='userModal-input userModal-submit' />
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => {
  return {
    ammount: state.userPersonalData.money.ammount,
    modals: {
      deposit: state.modals.deposit,
    },
  };
};
export default connect(mapStateToProps, null)(depositModal);
