import React from 'react';
import './styles/goalItem.css';

const CardGoal = ({ ammount, end, title, icon, color }) => {
  return (
    <article type='button' className='goal_container card'>
      <h2 className='goal_ammount'>
        $
        {ammount}
      </h2>
      <p className='goal_date'>{end}</p>
      <i aria-hidden className={`fas fa-${icon} goal_icon`} style={{ color: `rgb(${color})` }} />
      <h2 className='goal_title'>{title}</h2>
    </article>
  );
};
export default CardGoal;
