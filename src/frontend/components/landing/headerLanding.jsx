import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import BatataBit from '../../images/icons/batata.svg';

import './styles/headerLanding.css';

function headerLanding(props) {
    return (
        <header className='header-landing' >
            <section className='header--menu-container' >
                <Link to='/' >
                    <img src={BatataBit} alt="" className='header--menu-logo'/>
                    <h2 className='header--menu-title'>BatataBit</h2>
                </Link>
            </section>
                <Link to={props.userAcconut.email ? '/home' : '/log-in'} className='header-user'>{props.userAcconut.email ? 'Home' : 'Iniciar Sesión' }</Link>
        </header>
    )
}
const mapStaterops = state => {
    return {
        userAcconut: state.userAcconut
    }
}
export default connect(mapStaterops, null)(headerLanding);
