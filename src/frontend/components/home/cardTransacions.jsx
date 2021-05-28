/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { newTransacction } from '../../actions';
import UserI from '../../images/icons/user';
import './styles/cardTransactions.css';

function cardTransacions(props) {
  const { userPersonalData: { userFriends } } = props;
  const { newTransacction } = props;
  const { id, fullName } = props;
  const [form, setForm] = useState({ to: null, since: id, ammount: null, nameTo: null, sinceName: fullName });
  const setToTransaccion = (name, id) => {
    setForm({ ...form, to: id, nameTo: name });
  };
  return (
    <>
      <h3 className='transaction_title'>Nueva Transacción</h3>
      <div className='transacions_friensContainer'>
        {userFriends.map((e) => (
          <FriendTransacions
            setToTransaccion={setToTransaccion}
            {...e}
            key={e.fullName}
          />
        ))}
      </div>
      <div className='transacions_input'>
        <div className='transacions_inputTextContainer'>
          <input className='transacions_inputText' placeholder='0' type='number' onChange={(e) => setForm({ ...form, ammount: parseFloat(e.target.value) })} />
          <p className='transacions_inputDolar'>$</p>
        </div>
        <button onClick={() => newTransacction(form, '/home')} type='button' className='transacions_inputButton'>Enviar</button>
      </div>

    </>
  );
}

function FriendTransacions({ fullName, id, setToTransaccion }) {
  return (
    <div tabIndex={0} role='button' className='transacions_friensItem' onClick={() => setToTransaccion(fullName, id)}>
      <UserI className='header_userAvatar' />
      <p className='transacions_friensName'>{fullName}</p>
    </div>
  );
}
const mapDispachToProps = (state) => {
  return {
    userPersonalData: {
      userFriends: state.userPersonalData.userFriends,
    },
    id: state._id,
    fullName: state.userAcconut.fullName,
  };
};
const mapStateToProps = {
  newTransacction,
};
export default connect(mapDispachToProps, mapStateToProps)(cardTransacions);
