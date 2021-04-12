import React from 'react';

import play from '../../images/goalIcons/play.svg'
import brush from '../../images/goalIcons/brush.svg'
import mountain from '../../images/goalIcons/mountain.svg'

import './styles/goalItem.css';
const CardGoal = ({ammount, date, title}) =>{ 
    const handleImg = (type) => {
        switch (type) {
            case 'Vacaciones':
                return mountain;
            
            case 'ahorros':
                return brush;

            case 'Juegos':
                return play;

            default:
                return play;
        }

    }
    return(
        <div className='goal_container card'>
            <h2 className='goal_ammount'>${ammount}</h2>
            <p className='goal_date'>{date}</p>
            <img className='goal_svg' src={handleImg(title)} alt=""/>
            <h2 className='goal_title'>{title}</h2>
            
        </div>
)}
export default CardGoal