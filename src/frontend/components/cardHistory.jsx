import React from 'react';

import './styles/cardsHistory.css';

import ocio from '../images/types/shoping.svg';
import arrow from '../images/types/arrow.svg';
import person from '../images/types/person.svg';
import truck from '../images/types/truck.svg';
const CardHistory = () => {
    let transacctions = [
        {to: 'María', date: '12 de Dic', type:'restaurante', ammount: '200$', id: 1, img: null  },
       { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 2, img: null },
       {to: 'María', date: '12 de Dic', type:'ocio', ammount: '200$', id: 3, img: null  },
       { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 4, img: null },
       {to: 'María', date: '12 de Dic', type:'transacción', ammount: '200$', id: 5, img: null  }
    ]
    const handleImg = (type, id) => {
        switch (type) {
            case 'ocio':
                return transacctions[id].img = ocio;
            
            case 'comida':
                return transacctions[id].img = truck;

            case 'transacción':
                return transacctions[id].img = person;

            case 'restaurante':
                return transacctions[id].img = arrow;
            default:
                return transacctions[id].img = ocio;
        }

    }
    for (let index = 0; index < transacctions.length; index++) {
        const type = transacctions[index].type;
        handleImg(type, index);
    }
    return(
    <React.Fragment>
        <h3>Historial de Transacciones</h3>
        <table className='history_table'>
            <tr className='history_tableHead'>
                <th className="history_tableHeadName">Para</th>
                <th className="history_tableHeadName">fecha</th>
                <th className="history_tableHeadName">Tipo</th>
                <th className="history_tableHeadName last">Cantidad</th>
            </tr>
            {transacctions.map( e => <tr key={e.id} className='histoty_tableValueContainer'>
                <td className='histoty_tableValue first'>
                <img src={e.img} alt="" className="histoty_tableSvg"/>
                    {e.to}</td>
                <td className='histoty_tableValue'>{e.date}</td>
                <td className='histoty_tableValue'>{e.type}</td>
                <td className='histoty_tableValue last'>{e.ammount}</td>
            </tr>)}
        </table>
       

        
    </React.Fragment>
)}

export default CardHistory
