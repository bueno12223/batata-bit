import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DepositGoal, DeleteGoal } from '../../../actions';
import MainModal from './MainModal';
import './styles/userConfigModal.css';
import './styles/goalsModal.css';

function modifyGoalModal(props) {
  const { display, DepositGoal, DeleteGoal, userId } = props;
  const { title, icon, id } = props.selectGoal;
  const [ammount, setAmmunt] = useState(0);
  const handleDepositGoal = () => DepositGoal({ ammount, since: id, title, icon }, '/home');
  return (
    <MainModal display={display}>
      <h3>Metas</h3>
      <form className='userModal-conatiner' onSubmit={() => handleDepositGoal()}>
        <p>¿cuanto deseas guardar?</p>
        <input type='number' name='ammount' className='userModal-input' onChange={(e) => setAmmunt(parseFloat(e.target.value))} />
        <input type='submit' className='userModal-input userModal-submit' />
        <p>Romper la meta</p>
        <button type='button' onClick={() => DeleteGoal({ id, userId }, '/home')} className='userModal-input userModal-submit userModal-danger'>Romper</button>
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => ({
  display: state.modals.modifyGoals,
  userId: state._id,
});
const mapDispachToProps = {
  DepositGoal,
  DeleteGoal,
};
export default connect(mapStateToProps, mapDispachToProps)(modifyGoalModal);
