import React from 'react';
import './styles/header.css';
import { connect } from 'react-redux';
import Gravatar from '../general/gravatar';

const Header = (props) => {
  const { userAcconut: { userId, email } } = props;
  return (
    <div className='header'>
      <div className='header_text'>
        <h1 className='header_textTitle'>Resumen Semanal</h1>
        <p className='header_textDescription'>Desde aquí puedes ver y realizar transacciones</p>
      </div>
      <div className='header_user'>
        <button className='header_activateNavbar' type='button' onClick={() => props.handleNavbarActivation()}>
          <i aria-hidden className='fas fa-bars header_userIcon' />
        </button>
        <i aria-hidden className='fas fa-inbox header_userIcon' />
        <i aria-hidden className='fas fa-bell header_userIcon' />
        <Gravatar className='header_userAvatar' email={email} />
        <div className='header:userData'>
          <div className='header_Text'>
            <p className='header_TextName'><b>{userId}</b></p>
            <p className='header_TextOptions'>Opciones</p>
          </div>
        </div>

      </div>

    </div>

  );
};

const mapStateToProps = (state) => {
  return { userAcconut: state.userAcconut };
};
export default connect(mapStateToProps, null)(Header);
