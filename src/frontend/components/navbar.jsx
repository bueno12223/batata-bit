import React from 'react';
import './styles/navbar.css';
const Navbar = () => (
    <div className='navbar'>
        <div className="logo">
        <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8906 20.3161C10.4673 22.314 0.0927203 20.2722 0.000572001 11.3743C-0.0915763 2.47631 10.9806 7.77674 10.9806 7.77674L16.8906 20.3161Z" fill="#FFC250"/>
            <path d="M3.12363 6.38198C7.60659 5.61355 11.0113 11.5559 14.7782 17.7547C18.5452 23.9535 28.3542 26.4105 34.6218 21.1976C40.8893 15.9848 43.5419 6.85501 35.8464 1.40926C28.1509 -4.03649 23.3471 8.32707 16.7221 8.66692C10.0972 9.00677 10.0488 4.08063 3.12363 6.38198Z" fill="#FFD064"/>
            <ellipse cx="35.1972" cy="11.6513" rx="1.96745" ry="1.96809" fill="#FFE19D"/>
            <circle cx="31.4262" cy="13.1268" r="1.47559" fill="#FFE19D"/>
            <circle cx="34.0495" cy="15.0949" r="1.14768" fill="#FFE19D"/>
        </svg>
            <h3 className="logo_text">BatataBit</h3> 
        </div>
        <div className="menu">
            <div className="menu_option">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75787 19.0048L1.75787 1.92108" stroke="#197BBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.75767 19.0046L18.8414 19.0046" stroke="#197BBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.5943 12.0974C7.82196 10.0627 9.41983 8.8993 11.2216 7.28387L12.3399 11.6643L17.2127 7.55684" stroke="#197BBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Overview</p>
            </div>
            <div className="menu_option">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="30" height="30" transform="translate(0.299744 0.463165)" fill="white"/>
                <path d="M11.4908 9.74953H23.8701" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.4908 15.463H23.8701" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.4908 21.1765H23.8701" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.7298 9.74965H6.73836" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.72955 15.463H6.73812" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.72955 21.1765H6.73812" stroke="#C7C7C7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p>Transactions</p>
            </div>
            <div className="menu_option">

            <p>Invoices</p>
            </div>
            <div className="menu_option">

            <p>Goals</p>
            </div>
            <div className="menu_option">

            <p>Settings</p>
            </div>
        

        </div>
        
    </div>
    
)

export default Navbar;