import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Newdeposit } from '../../../actions';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function depositModal(props) {
  const [ammount, setAmmount] = useState(0);
  const { modals: { deposit } } = props;
  const handleDeposit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line radix
    props.Newdeposit({ ammount, id: props.id }, '/home');
  };
  return (
    <MainModal display={deposit}>
      <h3>Depósito</h3>
      <form className='userModal-conatiner' onSubmit={(e) => handleDeposit(e)}>
        <p>Ingresa el total a depositar</p>
        <input type='number' className='userModal-input' onChange={(e) => setAmmount(parseFloat(e.target.value))} />
        <input type='submit' className='userModal-input userModal-submit' />
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => {
  return {
    id: state._id,
    modals: {
      deposit: state.modals.deposit,
    },
  };
};
const mapDispachToProps = {
  Newdeposit,
};
export default connect(mapStateToProps, mapDispachToProps)(depositModal);
