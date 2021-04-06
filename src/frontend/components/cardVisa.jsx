import React from 'react';

import './styles/cardVisa.css';

const CardVisa = () =>{ 
    return(
    <React.Fragment>
        <h3 className="overview_title">Tarjetas</h3>
                <div className="overview_visa">
                    <p className='overview_visaName'>batata-card</p>
                    <p className='overview_visaType'>Planinum</p>

                    <p className="overview_visaNumbers">0000  ****  ****  0000</p>
                    <div className="overview_visaContainer">
                    <p className="overview_visaUser">Jesus Berrio</p>
                    <p className="overview_visaDate">06/24</p>
                    </div>
                    
                </div>
                <div className="overview_balance">
                    <h2 className='overview_balanceMain'>2850$</h2>
                    <p className='overview_balancedescrip'>Balance actual</p>
                    <h3 className='overview_balanceIncomer'>300$</h3>
                    <p className='overview_balancedescirp'>Ingresos</p>
                    <h4 className='overview_balanceSpend'>-150$</h4>
                    <p className='overview_balancedescrip'>Gastos</p>
                </div>
                <div className="overview_progesiveBar">
                    <div className="overview_progresiveFill" style={{width: 200 }} ></div>
                </div>
    </React.Fragment>
)}
export default CardVisa;