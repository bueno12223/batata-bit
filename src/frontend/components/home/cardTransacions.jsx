/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Gravatar from '../general/gravatar';
import plus from '../../images/icons/plus-B.svg';
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
        <Gravatar className='transacions_friensAvatar' email={email} /> :
        <img className='transacions_friensAvatar transacions_friensAdd' src={plus} alt='Añadir amigo' />}

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
