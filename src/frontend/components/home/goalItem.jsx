import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayModal } from '../../actions';
import play from '../../images/goalIcons/play.svg';
import brush from '../../images/goalIcons/brush.svg';
import mountain from '../../images/goalIcons/mountain.svg';

import './styles/goalItem.css';

const CardGoal = ({ ammount, date, title, id }, props) => {
  const { displayModal } = props;
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

  };
  return (
    <article className='goal_container card' onClick={() => displayModal('depositGoal')}>
      <h2 className='goal_ammount'>
        $
        {ammount}
      </h2>
      <p className='goal_date'>{date}</p>
      <img className='goal_svg' src={handleImg(title)} alt='' />
      <h2 className='goal_title'>{title}</h2>
    </article>
  );
};
const mapDispachToProps = {
  displayModal,
};
CardGoal.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  displayModal: PropTypes.func,
};
export default connect(mapDispachToProps, null)(CardGoal);
