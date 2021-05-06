import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UpDatePlan from '../../images/icons/updatePlan';
import Batata from '../../images/icons/batata.svg';
import { displayModal } from '../../actions';
import './styles/navbar.css';

const Navbar = (props) => {
  const handleLogOut = () => {
    document.cookie = 'email=';
    window.location.href = '/log-in';
  };
  const { activate, displayModal } = props;
  return (
    <div className={activate % 2 === 0 ? 'navbar' : 'navbar_activate card'}>
      <div className='logo'>
        <img src={Batata} alt='' />
        <h3 className='logo_text'>BatataBit</h3>
      </div>
      <div className='navrbar_menuSideBar'>
        <ul>
          <button type='button' className='menu_button'>
            <div className='menu_option moveIt'>
              <i className='fas fa-trophy menu_button_icon' />
              <p>Metas</p>
            </div>
          </button>
          <button type='button' className='menu_button'>
            <div className='menu_option'>
              <i className='fas fa-file-invoice-dollar menu_button_icon' />
              <p>Transacciones</p>
            </div>
          </button>

          <button type='button' className='menu_button' onClick={() => { displayModal('deposit'); }}>
            <div className='menu_option'>
              <i className='fas fa-hand-holding-usd menu_button_icon' />
              <p className='navbar-element-changeHover'>Depósitos</p>
            </div>
          </button>

          <button type='button' className='menu_button' onClick={() => { displayModal('config'); }}>
            <div className='menu_option'>
              <i className='fas fa-cog menu_button_icon' />
              <p>Ajustes</p>
            </div>
          </button>

          <button type='button' className='menu_button' onClick={handleLogOut}>
            <div className='menu_option'>
              <i className='fas fa-sign-out-alt menu_button_icon' />
              <p>Cerrar Sesión</p>
            </div>
          </button>

        </ul>
      </div>

      <div className='navbar_upgrade'>
        <UpDatePlan className='navbar_upgradeImg' />
        <button type='button' className='navbar_upgradeButton'>
          Comprar premium
          <svg width='9' height='10' viewBox='0 0 9 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M4.43262 8.90073V1.62207' stroke='#404040' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M0.793945 5.2614L4.43327 1.62207L8.0726 5.2614' stroke='#404040' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          </svg>

        </button>
      </div>
    </div>

  );
};
const mapDispachToProps = {
  displayModal,
};
Navbar.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  displayModal: PropTypes.func,
};
export default connect(null, mapDispachToProps)(Navbar);
