import React from 'react';
import './styles/goalItem.css';

const CardGoal = ({ ammount, end, title, icon }) => {
  return (
    <article type='button' className='goal_container card'>
      <h2 className='goal_ammount'>
        $
        {ammount}
      </h2>
      <p className='goal_date'>{end}</p>
      <i className={`fas fa-${icon} goal_icon`} />
      <h2 className='goal_title'>{title}</h2>
    </article>
  );
};
export default CardGoal;
