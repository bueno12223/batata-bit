import React from 'react';
import { connect } from 'react-redux';
import MainModal from './MainModal';
import './styles/userConfigModal.css';

function goalsModals(props) {
  const { display } = props;
  return (
    <MainModal display={display}>
      <h3>Crear una meta</h3>
      <form className='userModal-conatiner'>
        <p>Nombre de la meta</p>
        <input type='text' className='userModal-input' />
        <p>¿cuando lo quieres lograr?</p>
        <input type='date' className='userModal-input' />
        <input type='submit' className='userModal-input userModal-submit' />
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => {
  return {
    display: state.modals.goals,
  };
};

export default connect(mapStateToProps, null)(goalsModals);
