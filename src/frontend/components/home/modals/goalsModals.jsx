import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainModal from './MainModal';
import './styles/userConfigModal.css';
import './styles/goalsModal.css';

function goalsModals(props) {
  const { display } = props;
  const [goal, setGoal] = useState({
    end: '',
    title: '',
    icon: '',
    goal: 0,
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
            <option value={icon}>{icon}</option>
          ))}
        </select>
        <Link to='/home' onClick={() => console.log(goal)} type='submit' className='userModal-input userModal-submit' />
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
