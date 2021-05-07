import React from 'react';

// left components
import CardVisa from './cardVisa';
import CardHistory from './cardHistory';

// rigth components
import CardGoal from './cardGoal';
import CardStatics from './cardStatics';
import Transactions from './cardTransacions';

// modals
import UserConfigModal from './modals/userConfigModal';
import DepositModal from './modals/depositModal';
import GoalsModal from './modals/goalsModals';

import clouds from '../../images/icons/cloud.svg';
import './styles/cards.css';

const Cards = () => {
  return (
    <div className='cards_container'>
      <UserConfigModal />
      <DepositModal />
      <GoalsModal />

      <div className='cards_leftContainer'>
        <div className='card card_LeftOverview'><CardVisa /></div>
        <div className='card card_LeftHistory'><CardHistory /></div>
      </div>
      <div className='cards_RigthContainer'>
        <div className='card_RightGoal'><CardGoal /></div>
        <div className='card card_RigthStatics'><CardStatics /></div>
        <div className='card card_RigthTransactions'><Transactions /></div>
        <div className='card card_RigthGreate'>
          {/* <Clouds className='loal_svg' /> */}
          <img className='loal_svg' src={clouds} alt='clouds' />
          <p className='loal_title'>
            Obten un
            <br />
            préstamo
          </p>
        </div>

      </div>

    </div>

  );
};

export default Cards;
