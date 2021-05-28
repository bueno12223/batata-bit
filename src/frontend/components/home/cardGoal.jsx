/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayModal } from '../../actions';
import GoalItem from './goalItem';
import PlusIcon from '../../images/icons/plus';
import SetColorHook from '../../hooks/setColorHook';
import ModifyGoal from './modals/modifyGoalModal';
import './styles/cardGoal.css';

const cardGoal = (props) => {
  const [selectGoal, setSelected] = useState({ ammount: null, end: null, title: null, icon: null, color: null });
  const { displayModal, goals } = props;
  return (
    <>
      <ModifyGoal selectGoal={selectGoal} />
      <div className='card_RightGoalTitle'>
        <p>Metas</p>
        <button type='button' onClick={() => displayModal('goals')}>
          <PlusIcon />
        </button>
      </div>
      <div className='goalItem'>
        {goals.length === 0 && (
          <div className='goalitem_noGoal'>
            <h2>No Hay metas pendientes :(</h2>
            <p>Pronerme una nueva meta!!</p>
          </div>

        )}
        {goals.map((e, idx) => (
          <GoalItem key={e._id} color={SetColorHook(idx)} {...e} onClick={setSelected} />
        ))}
      </div>

    </>
  );
};
const mapStateToProps = (state) => {
  return {
    goals: state.userPersonalData.goals,
  };
};
const mapDispachToProps = {
  displayModal,
};
cardGoal.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  displayModal: PropTypes.func,
};
export default connect(mapStateToProps, mapDispachToProps)(cardGoal);
