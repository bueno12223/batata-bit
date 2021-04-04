import React, {useState} from 'react';
import './styles/navbar.css';

import Batata from '../images/icons/normal/batata.svg';
import Bmenu from '../images/icons/normal/Bmenu.svg';
import Bcard from '../images/icons/normal/Bcard.svg';
import Bpaper from '../images/icons/normal/Bpaper.svg';
import Bgoal from '../images/icons/normal/Bgoal.svg';
import Bsettings from '../images/icons/normal/Bsettings.svg';
const Navbar = () => {
 
return(
    <div className='navbar'>
        <div className="logo">
        <img src={Batata} alt=""/>
            <h3 className="logo_text">BatataBit</h3> 
        </div>
        <div className="menu">
            <button className='menu_button' >
                <div className="menu_option">
                <svg className='svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="29.1405" height="29.427" transform="translate(0.690384 0.250763)"/>
                    <path d="M11.4516 9.25076H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.4516 14.9643H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.4516 20.6778H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69063 9.25089H6.69919" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69038 14.9643H6.69895" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69038 20.6778H6.69895" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <p>Overview</p>
                </div>
            </button>
            <button className='menu_button'>
                <div className="menu_option">
                    <img className='menu_optionImg' src={Bpaper} alt=""/>
                    <p>Transactions</p>
                </div>
            </button>
            <button className='menu_button'>
                <div className="menu_option">
                    <img className='menu_optionImg moveIt' src={Bcard} alt=""/>
                    <p>Invoices</p>
                </div>
            </button>
            <button className='menu_button'>
                <div className="menu_option">
                    <img className='menu_optionImg' src={Bgoal} alt=""/>
                    <p>Goals</p>
                </div>
            </button>
            <button className='menu_button'>
                <div className="menu_option">
                    <img className='menu_optionImg moveIt' src={Bsettings} alt=""/>
                    <p>Settings</p>
                </div>
            </button>

        </div>
        
    </div>
    
)};

export default Navbar;