import React from 'react';
import { connect } from 'react-redux';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function modifyGoalModal(props) {
  const { display } = props;
  const { ammount, end, title } = props.selectGoal;
  return (
    <MainModal display={display}>
      <h3>Metas</h3>
      <form>
        <h4>{ammount}</h4>
        <p>¿cuanto deseas guardar?</p>
        <input type='number' name='ammount' className='userModal-input' />
        <h4>{title}</h4>
        <input type='text' name='title' className='userModal-input' />
        <p>{new Date(end).toLocaleDateString('en-US')}</p>
        <input type='date' name='date' className='userModal-input' />
        <input type='submit' className='userModal-input userModal-submit' />
        <p>Romper la meta</p>
        <input type='submit' className='userModal-input userModal-submit userModal-danger' />
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => ({
  display: state.modals.modifyGoals,
});
export default connect(mapStateToProps, null)(modifyGoalModal);
