import React from 'react';

import CardVisa from './cardVisa.jsx';

import './styles/cards.css';

const Cards = () => (
    <div className='cards_container'>
        <div className="cards_leftContainer">
            <div className="card card_LeftOverview"><CardVisa></CardVisa></div>
            <div className="card card_LeftHistory"></div>
            </div>
        <div className="cards_RigthContainer">
            <div className="card_RightGoal">
                <div className="card_RightGoalTitle">
                <p>Goal</p>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2762 22.7996C17.7991 22.7996 22.2762 18.3225 22.2762 12.7996C22.2762 7.27677 17.7991 2.79962 12.2762 2.79962C6.7534 2.79962 2.27625 7.27677 2.27625 12.7996C2.27625 18.3225 6.7534 22.7996 12.2762 22.7996Z" fill="#FFC145"/>
                    <path d="M12.2762 8.79962V16.7996" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.27625 12.7996H16.2762" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            </div>
            <div className="card card_RightGoalTap tap1">
            </div>
            <div className="card card_RightGoalTap tap2"></div>
            <div className="card card_RightGoalTap tap3"></div>

            <div className="card card_RigthStatics"></div>
            <div className="card card_RigthTransactions"></div>
            <div className="card card_RigthGreate"></div>

            </div>
       


    </div>
   
)

export default Cards;