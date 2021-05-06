import React from 'react';
import { connect } from 'react-redux';

import './styles/cardVisa.css';

const CardVisa = (props) => {
  const { userPersonalData: { visa, money } } = props;
  return (
    <>
      <h3 className='overview_title'>Tarjetas</h3>
      <div className='overview_visa'>
        <p className='overview_visaName'>batata-card</p>
        <p className='overview_visaType'>Planinum</p>

        <p className='overview_visaNumbers'>{visa.numbers}</p>
        <div className='overview_visaContainer'>
          <p className='overview_visaUser'>{visa.pin}</p>
          <p className='overview_visaDate'>{visa.date}</p>
        </div>

      </div>
      <div className='overview_balance'>
        <div className=''>
          <h2 className='overview_balanceMain'>
            {money.total || '0.00'}
            $
          </h2>
          <p className='overview_balancedescrip'>Balance actual</p>
        </div>
        <div className=''>
          <h3 className='overview_balanceIncomer'>
            {visa.incomer || '0.00'}
            $
          </h3>
          <p className='overview_balancedescrip'>Ingresos</p>
        </div>
        <div className=''>
          <h4 className='overview_balanceSpend'>
            -
            {visa.spend || '0.00'}
            $
          </h4>
          <p className='overview_balancedescrip'>Gastos</p>
        </div>

      </div>
      <div className='overview_progesiveBar'>
        <div className='overview_progresiveFill' style={{ width: `${visa.progesiveBar || 0}%` }} />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userPersonalData: {
      visa: state.userPersonalData.visa,
      money: state.userPersonalData.money,
    },
  };
};
export default connect(mapStateToProps, null)(CardVisa);
