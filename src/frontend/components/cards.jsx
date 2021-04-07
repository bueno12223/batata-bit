import React from 'react';

import CardVisa from './cardVisa.jsx';
import CardHistory from './cardHistory.jsx';

import CardGoal from './cardGoal.jsx';
import CardStatics from './cardStatics.jsx';

import './styles/cards.css';

const Cards = () => {
    return(
    <div className='cards_container'>
        <div className="cards_leftContainer">
            <div className="card card_LeftOverview"><CardVisa></CardVisa></div>
            <div className="card card_LeftHistory"><CardHistory></CardHistory></div>
            </div>
        <div className="cards_RigthContainer">
            <div className="card_RightGoal"><CardGoal></CardGoal></div>
            <div className="card card_RigthStatics"><CardStatics></CardStatics></div>
            <div className="card card_RigthTransactions"></div>
            <div className="card card_RigthGreate"></div>

            </div>
       


    </div>
   
)}

export default Cards;