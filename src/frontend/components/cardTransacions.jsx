import React, {useState} from 'react';
import {connect} from 'react-redux';
import Gravatar from './gravatar';

import {doTransaccion} from '../actions';
import plus from '../images/friends/plus.svg';
import './styles/cardTransactions.css';
function cardTransacions(props) {
    const {userPersonalData: {userFriends} } = props;
    const add = {name: 'añadir nuevo', email: null}

    const [transacctionData, setTransaccionData] = useState({to: null, ammount: null })
    const handleDoTransaccion = (data) => {
        if(data.to !== undefined && data.ammount !== 0 && data.ammount){
            props.doTransaccion(data);
        }else{alert('Por favor llene los datos')}
    };

    return (
        <React.Fragment>
            <h3 className="transaction_title">Nueva Transacción</h3>
            <div className="transacions_friensContainer">
                {userFriends.map(e => <FriendTransacions setToTransaccion={(e) => setTransaccionData({...transacctionData, to: e})}  {...e} id={e.id} key={e.id}></FriendTransacions>)}
                <FriendTransacions {...add} key={10}></FriendTransacions>
            </div>
            <div className="transacions_input">
                <div className="transacions_inputTextContainer">
                    <input onChange={e => setTransaccionData({...transacctionData, ammount: e.target.value })} className="transacions_inputText" placeholder='0'  type="number"/>
                    <p className='transacions_inputDolar'>$</p>
                </div>
                <button onClick={() => handleDoTransaccion(transacctionData)} className="transacions_inputButton">Enviar</button>
            </div>

        </React.Fragment>
    )
}

function FriendTransacions({name, email, setToTransaccion}) {
    return (
        <div className='transacions_friensItem' onClick={() => setToTransaccion(name)}>
            {email
            ? <Gravatar className='transacions_friensAvatar' email={email}></Gravatar>
            : <img className='transacions_friensAvatar transacions_friensAdd' src={plus} alt="Añadir amigo"/>
        }
            
            <p className='transacions_friensName'>{name}</p>
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
const mapStateToProps = {
    doTransaccion
}
export default connect(mapDispachToProps, mapStateToProps)(cardTransacions);
