import React from 'react';

import './styles/cardsHistory.css';

import ocio from '../images/types/shoping.svg';
import arrow from '../images/types/arrow.svg';
import person from '../images/types/person.svg';
import truck from '../images/types/truck.svg';
import { connect } from 'react-redux';
const CardHistory = (props) => {
    const {userPersonalData: { transacctions } } = props;
    console.log(props.userPersonalData.transacctions)
    return(
    <React.Fragment>
        <h3 className='history_tableTitleUp'>Historial de Transacciones</h3>
        <table className='history_table'>
            <tr className='history_tableHead'>
                <th className="history_tableHeadName">Para</th>
                <th className="history_tableHeadName out">fecha</th>
                <th className="history_tableHeadName">Tipo</th>
                <th className="history_tableHeadName last">Cantidad</th>
            </tr>
            {transacctions.map( e => <tr key={e.id} className='histoty_tableValueContainer'>
                <td className='histoty_tableValue first'>
                <img src={arrow} alt="" className="histoty_tableSvg"/>
                    {e.to}</td>
                <td className='histoty_tableValue out'>{e.date}</td>
                <td className='histoty_tableValue'>{e.type}</td>
                <td className='histoty_tableValue last'>{e.ammount}</td>
            </tr>)}
        </table>
       

        
    </React.Fragment>
)}
const mapStateToProps = state => {
    return{ 
        userPersonalData: {
            transacctions: state.userPersonalData.transacctions
        }}
}
export default connect(mapStateToProps, null)(CardHistory);
