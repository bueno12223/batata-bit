import React from 'react';
import { connect } from 'react-redux';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function modifyGoalModal(props) {
  const { display } = props;
  return (
    <MainModal display={display}>
      <h3>Metas</h3>
      <form>
        <p>¿cuanto deseas guardar?</p>
        <input type='number' className='userModal-input' />
        <input type='submit' className='userModal-input userModal-submit' />
        <p>Romper la meta</p>
        <input type='submit' className='userModal-input userModal-submit' />
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => ({
  display: state.modals.depositGoal,
});
export default connect(mapStateToProps, null)(modifyGoalModal);
