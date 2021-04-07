import React from 'react'

import ana from '../images/friends/ana.png';
import plus from '../images/friends/plus.svg';
import './styles/cardTransactions.css';
function cardTransacions() {

    const friends = [
        {name: 'Ana', avatar: ana, id: 1 },
        {name: 'Luis', avatar: ana, id: 2 },
        {name: 'Jhon', avatar: ana, id: 3 },
        {name: 'Mike', avatar: ana, id: 4 },
        {name: 'Mia', avatar: ana, id: 5 },
        {name: 'Add New', avatar: plus, id: 6 }

    ]
    return (
        <React.Fragment>
            <h3 className="transaction_title">Nueva Transacción</h3>
            <div className="transacions_friensContainer">
                {friends.map(e => <FriendTransacions {...e} key={e.id}></FriendTransacions>)}
            </div>
            <div className="transacions_input">
                <div className="transacions_inputTextContainer">
                    <input className="transacions_inputText" placeholder='0'  type="texbox"/>
                    <p className='transacions_inputDolar'>$</p>
                </div>
                <button className="transacions_inputButton">Enviar</button>
            </div>

        </React.Fragment>
    )
}

function FriendTransacions({name, avatar}) {
    return (
        <div className='transacions_friensItem'>
            <img className='transacions_friensAvatar' src={avatar} alt=""/>
            <p className='transacions_friensName'>{name}</p>
            
        </div>
    )
}

export default cardTransacions

