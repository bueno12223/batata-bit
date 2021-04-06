import React from 'react'

import GoalItem from './goalItem.jsx';

import './styles/cardGoal.css'
const cardGoal = () => {
    const goal = [
        {ammount: 15, date: '12/82/12', title: 'Vacaciones', id: 1},
        {ammount: 101, date: '12/12/72', title: 'ahorros', id: 3},
        {ammount: 9, date: '22/12/12', title: 'Juegos', id: 2},
        {ammount: 101, date: '12/12/72', title: 'ahorros', id: 3},
        {ammount: 9, date: '22/12/12', title: 'Juegos', id: 2}
    ]

    return(
        <React.Fragment>
            <div className="card_RightGoalTitle">
                <p>Metas</p>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2762 22.7996C17.7991 22.7996 22.2762 18.3225 22.2762 12.7996C22.2762 7.27677 17.7991 2.79962 12.2762 2.79962C6.7534 2.79962 2.27625 7.27677 2.27625 12.7996C2.27625 18.3225 6.7534 22.7996 12.2762 22.7996Z" fill="#FFC145"/>
                    <path d="M12.2762 8.79962V16.7996" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.27625 12.7996H16.2762" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="goalItem">
            <GoalItem key={goal[0].id} {...goal[0]}></GoalItem>
            <GoalItem key={goal[0].id} {...goal[0]}></GoalItem>
            <GoalItem key={goal[0].id} {...goal[0]}></GoalItem>
            <GoalItem key={goal[0].id} {...goal[0]}></GoalItem>
            
            </div>
            
            {/* {goal.map( e => (
                <div className="card card_RightGoalTap">
                <GoalItem key={e.id} {...e}></GoalItem>
            </div>
            ) )} */}
            

        </React.Fragment>
    )
}

export default cardGoal;