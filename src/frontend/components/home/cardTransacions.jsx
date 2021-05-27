/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import UserI from '../../images/icons/user';
import './styles/cardTransactions.css';

function cardTransacions(props) {
  const { userPersonalData: { userFriends } } = props;
  const add = { fullName: 'añadir nuevo', email: null };
  return (
    <>
      <h3 className='transaction_title'>Nueva Transacción</h3>
      <div className='transacions_friensContainer'>
        {userFriends.map((e) => <FriendTransacions setToTransaccion={(e) => setTransaccionData({ ...transacctionData, to: e })} {...e} key={e.fullName} />)}
        <FriendTransacions {...add} key={add.fullName} />
      </div>
      <div className='transacions_input'>
        <div className='transacions_inputTextContainer'>
          <input className='transacions_inputText' placeholder='0' type='number' />
          <p className='transacions_inputDolar'>$</p>
        </div>
        <button type='button' className='transacions_inputButton'>Enviar</button>
      </div>

    </>
  );
}

function FriendTransacions({ fullName, email }) {
  return (
    <div className='transacions_friensItem'>
      {email ?
        <UserI className='header_userAvatar' /> : (
          <svg width='43' height='43' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.8429 22.5361C18.3657 22.5361 22.8429 18.059 22.8429 12.5361C22.8429 7.01329 18.3657 2.53613 12.8429 2.53613C7.32005 2.53613 2.8429 7.01329 2.8429 12.5361C2.8429 18.059 7.32005 22.5361 12.8429 22.5361Z' fill='#FFC145' />
            <path d='M12.8429 8.53613V16.5361' stroke='#404040' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M8.8429 12.5361H16.8429' stroke='#404040' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        )}

      <p className='transacions_friensName'>{fullName}</p>
    </div>
  );
}
const mapDispachToProps = (state) => {
  return {
    userPersonalData: {
      userFriends: state.userPersonalData.userFriends,
    },
  };
};
export default connect(mapDispachToProps, null)(cardTransacions);
