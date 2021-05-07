import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles/headerLanding.css';

function headerLanding(props) {
  return (
    <header className='header-landing'>
      <section className='header--menu-container'>
        <Link to='/'>
          <svg className='header--menu-logo' width='41' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M17 20c-7 2-17 0-17-9s11-3 11-3l6 12z' fill='#FFC250' />
            <path d='M3 6c5 0 8 6 12 12s13 8 20 3c6-5 9-14 1-20-8-5-13 7-19 8-7 0-7-5-14-3z' fill='#FFD064' />
            <circle cx='35.2' cy='11.7' fill='#FFE19D' r='2' />
            <circle cx='31.4' cy='13.1' r='1.5' fill='#FFE19D' />
            <circle cx='34' cy='15.1' r='1.1' fill='#FFE19D' />
          </svg>
          <h2 className='header--menu-title'>BatataBit</h2>
        </Link>
      </section>
      <Link to={props.userAcconut.email ? '/home' : '/log-in'} className='header-user'>{props.userAcconut.email ? 'Home' : 'Iniciar Sesión' }</Link>
    </header>
  );
}
const mapStaterops = (state) => {
  return {
    userAcconut: state.userAcconut,
  };
};
export default connect(mapStaterops, null)(headerLanding);
