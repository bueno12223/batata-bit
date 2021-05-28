import React from 'react';
import './styles/goalItem.css';

const CardGoal = (props) => {
  const { ammount, end, title, icon, color } = props;
  return (
    <article type='button' className='goal_container card' onClick={() => props.onClick({ ammount, end, title, icon, color })}>
      <h2 className='goal_ammount'>
        $
        {ammount}
      </h2>
      <p className='goal_date'>{new Date(end).toLocaleDateString('en-US')}</p>
      <i aria-hidden className={`fas fa-${icon} goal_icon`} style={{ color: `rgb(${color})` }} />
      <h2 className='goal_title'>{title}</h2>
    </article>
  );
};
export default CardGoal;
