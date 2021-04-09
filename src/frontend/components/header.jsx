import React from 'react';
import './styles/header.css';
import Gravatar from './gravatar';
import {connect} from 'react-redux';
const Header = (props) => (
    <div className="header">
            <div className="header_text">
                <h1 className='header_textTitle'>Resumen Semanal</h1>
                <p className='header_textDescription'>Desde aquí puedes ver y realizar transacciones</p>
            </div>
            <div className="header_user">
            <svg className='header_userHamburger ' onClick={() =>props.handleNavbarActivation()} width="30" height="30" viewBox="0 0 30 30" fill='none' xmlns="http://www.w3.org/2000/svg">
                <rect width="29.1405" height="29.427" transform="translate(0.690384 0.250763)"/>
                    <path d="M11.4516 9.25076H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E3E3E3"/>
                    <path d="M11.4516 14.9643H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E3E3E3"/>
                    <path d="M11.4516 20.6778H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E3E3E3"/>
                    <path d="M6.69063 9.25089H6.69919" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E3E3E3"/>
                    <path d="M6.69038 14.9643H6.69895" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E3E3E3"/>
                    <path d="M6.69038 20.6778H6.69895" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E3E3E3"/>
                </svg>
            <svg className='header_userMail' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.79559 4.25281H20.7956C21.8956 4.25281 22.7956 5.15281 22.7956 6.25281V18.2528C22.7956 19.3528 21.8956 20.2528 20.7956 20.2528H4.79559C3.69559 20.2528 2.79559 19.3528 2.79559 18.2528V6.25281C2.79559 5.15281 3.69559 4.25281 4.79559 4.25281Z" fill="#E3E3E3"/>
                <path d="M22.7956 6.25281L12.7956 13.2528L2.79559 6.25281" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className='header_userNotification' width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7956 6.25281C15.7956 4.66151 15.1635 3.13539 14.0382 2.01017C12.913 0.884949 11.3869 0.252808 9.79559 0.252808C8.20429 0.252808 6.67817 0.884949 5.55295 2.01017C4.42773 3.13539 3.79559 4.66151 3.79559 6.25281C3.79559 13.2528 0.795593 15.2528 0.795593 15.2528H18.7956C18.7956 15.2528 15.7956 13.2528 15.7956 6.25281Z" fill="#E3E3E3"/>
            </svg>
            <Gravatar className='header_userAvatar' email={props.userAcconut.email}></Gravatar>
            <div className="header:userData">
                <div className="header_Text">
                <p className='header_TextName'><b>{props.userAcconut.userId}</b></p>
                <p className='header_TextOptions'>Opciones</p>
                </div>
            </div>
            
            </div> 
            
        </div>
    
)

const mapStateToProps = state => {
    return{userAcconut: state.userAcconut}
}
export default connect(mapStateToProps, null)(Header);