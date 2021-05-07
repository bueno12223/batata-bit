import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { saveGoal } from '../../../actions';
import MainModal from './MainModal';
import './styles/userConfigModal.css';
import './styles/goalsModal.css';

function goalsModals(props) {
  const { display, id, saveGoal } = props;
  const [goal, setGoal] = useState({
    end: '',
    title: '',
    icon: '',
    goal: 0,
    id,
  });
  const handleChange = (e) => {
    setGoal({
      ...goal,
      [e.target.name]: e.target.value,
    });
  };
  const icons = ['ad', 'archive', 'birthday-cake', 'book', 'cat', 'bread-slice', 'briefcase-medical', 'bus', 'comment-dollar', 'coffee'];
  return (
    <MainModal display={display}>
      <h3>Crear una meta</h3>
      <form className='userModal-conatiner'>
        <p>Nombre de la meta</p>
        <input name='title' onChange={(e) => handleChange(e)} type='text' className='userModal-input' />
        <p>¿cuanto quieres lograr?</p>
        <input name='goal' onChange={(e) => handleChange(e)} type='number' className='userModal-input' />
        <p>¿cuando lo quieres lograr?</p>
        <input name='end' onChange={(e) => handleChange(e)} type='date' className='userModal-input' />
        <p>Icono</p>
        <select name='icon' onChange={(e) => handleChange(e)} required defaultValue='0' className='userModal-input'>
          {icons.map((icon) => (
            <option key={icon} value={icon}>{icon}</option>
          ))}
        </select>
        <Link to='/home' onClick={() => saveGoal(goal, '/home')} type='submit' className='userModal-input userModal-submit' />
      </form>
    </MainModal>
  );
}
const mapStateToProps = (state) => {
  return {
    display: state.modals.goals,
    id: state._id,
  };
};
const mapDispachToProps = {
  saveGoal,
};
goalsModals.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  saveGoal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispachToProps)(goalsModals);
