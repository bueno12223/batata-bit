import React, {useState} from 'react';
import {connect} from 'react-redux';
import Gravatar from '../general/gravatar';
import plus from '../../images/friends/plus.svg';
import './styles/cardTransactions.css';
function cardTransacions(props) {
    const {userPersonalData: {userFriends} } = props;
    const add = {fullName: 'añadir nuevo', email: null}
    return (
        <React.Fragment>
            <h3 className="transaction_title">Nueva Transacción</h3>
            <div className="transacions_friensContainer">
                {userFriends.map(e => <FriendTransacions setToTransaccion={(e) => setTransaccionData({...transacctionData, to: e})}  {...e} id={e.id} key={e.id}></FriendTransacions>)}
                <FriendTransacions {...add} key={10}></FriendTransacions>
            </div>
            <div className="transacions_input">
                <div className="transacions_inputTextContainer">
                    <input className="transacions_inputText" placeholder='0'  type="number"/>
                    <p className='transacions_inputDolar'>$</p>
                </div>
                <button  className="transacions_inputButton">Enviar</button>
            </div>

        </React.Fragment>
    )
}

function FriendTransacions({fullName, email, setToTransaccion}) {
    return (
        <div className='transacions_friensItem' onClick={() => setToTransaccion(name)}>
            {email
            ? <Gravatar className='transacions_friensAvatar' email={email}></Gravatar>
            : <img className='transacions_friensAvatar transacions_friensAdd' src={plus} alt="Añadir amigo"/>
        }
            
            <p className='transacions_friensName'>{fullName}</p>
        </div>
    )
}
const mapDispachToProps = state => {
    return{
        userPersonalData: {
            userFriends: state.userPersonalData.userFriends
        }
    }
}
export default connect(mapDispachToProps, null)(cardTransacions);
