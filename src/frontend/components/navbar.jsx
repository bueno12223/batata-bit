import React from 'react';
import './styles/navbar.css';

import UpDatePlan from '../images/icons/updatePlan.svg';
import Batata from '../images/icons/batata.svg';
const Navbar = (props) => {
    console.log(props)
return(
    <div className={props.activate%2 == 0 ? 'navbar' : 'navbar_activate card'}>
        <div className="logo">
        <img src={Batata} alt=""/>
            <h3 className="logo_text">BatataBit</h3> 
        </div>
        <div className="navrbar_menuSideBar">
            <ul>
                <a href="">
                <button className='menu_button' >
                <div className="menu_option moveIt">
                <svg className='menu_svg' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.14853 17.7924L0.148529 0.708664" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.148329 17.7922L17.232 17.7922" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.98495 10.885C6.21262 8.85027 7.81048 7.68688 9.6123 6.07146L10.7306 10.4518L15.6033 6.34442" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <p>General</p>
                </div>
            </button>
                </a>
                <a href="">
                <button className='menu_button'>
                <div className="menu_option">
                <svg className='menu_svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="29.1405" height="29.427" transform="translate(0.690384 0.250763)"/>
                    <path d="M11.4516 9.25076H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.4516 14.9643H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.4516 20.6778H23.8309" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69063 9.25089H6.69919" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69038 14.9643H6.69895" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69038 20.6778H6.69895" stroke='#C7C7C7' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <p>Transacciones</p>
                </div>
            </button>
                </a>
                <a href="">
                <button className='menu_button'>
                <div className="menu_option">
                <svg className='menu_svg' width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" transform="translate(0.690384 0.250763)"/>
                    <path d="M23.054 8.25076H8.32675C7.42301 8.25076 6.69038 9.03426 6.69038 10.0008V20.5008C6.69038 21.4673 7.42301 22.2508 8.32675 22.2508H23.054C23.9578 22.2508 24.6904 21.4673 24.6904 20.5008V10.0008C24.6904 9.03426 23.9578 8.25076 23.054 8.25076Z" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.69038 13.2508H24.6904" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <p>Tarjetas</p>
                </div>
            </button>
                </a>
                <a href="">
                <button className='menu_button'>
                <div className="menu_option">
                <svg className='menu_svg' width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" transform="translate(0.690384 0.25061)"/>
                    <path d="M17.2918 7.2436H10.8862C10.4614 7.2436 10.0541 7.41232 9.7538 7.71264C9.45348 8.01296 9.28476 8.42029 9.28476 8.84501V21.6563C9.28476 22.081 9.45348 22.4883 9.7538 22.7886C10.0541 23.089 10.4614 23.2577 10.8862 23.2577H20.4946C20.9193 23.2577 21.3267 23.089 21.627 22.7886C21.9273 22.4883 22.096 22.081 22.096 21.6563V12.0478L17.2918 7.2436Z" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.2919 7.24338V12.0476H22.0962" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <p>Facturas</p>
                </div>
            </button>
                </a>
                <a href="">
                <button className='menu_button'>
                <div className="menu_option">
                <svg className='menu_svg'  width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" transform="translate(0.690384 0.250763)"/>
                    <path d="M15.6902 17.7015C18.8487 17.7015 21.4091 15.1411 21.4091 11.9826C21.4091 8.8241 18.8487 6.26364 15.6902 6.26364C12.5317 6.26364 9.97125 8.8241 9.97125 11.9826C9.97125 15.1411 12.5317 17.7015 15.6902 17.7015Z" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5938 17.4706L11.6052 24.9134L15.6902 22.4625L19.7751 24.9134L18.7866 17.4625" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                    <p>Metas</p>
                </div>
            </button>
                </a>
                <a href="">
                <button className='menu_button'>
                <div className="menu_option">
                    <svg className='menu_svg'  width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" transform="translate(0.690384 0.250763)" />
                        <path d="M15.6906 17.5661C16.9692 17.5661 18.0056 16.5296 18.0056 15.2511C18.0056 13.9726 16.9692 12.9362 15.6906 12.9362C14.4121 12.9362 13.3757 13.9726 13.3757 15.2511C13.3757 16.5296 14.4121 17.5661 15.6906 17.5661Z" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.4006 17.5659C21.2979 17.7986 21.2673 18.0568 21.3126 18.3071C21.358 18.5574 21.4774 18.7884 21.6553 18.9703L21.7016 19.0166C21.845 19.1599 21.9589 19.3301 22.0365 19.5174C22.1142 19.7048 22.1542 19.9056 22.1542 20.1084C22.1542 20.3112 22.1142 20.5121 22.0365 20.6994C21.9589 20.8868 21.845 21.057 21.7016 21.2003C21.5582 21.3438 21.388 21.4576 21.2007 21.5353C21.0133 21.613 20.8125 21.6529 20.6097 21.6529C20.4069 21.6529 20.206 21.613 20.0187 21.5353C19.8313 21.4576 19.6611 21.3438 19.5178 21.2003L19.4715 21.154C19.2896 20.9761 19.0587 20.8568 18.8083 20.8114C18.558 20.766 18.2998 20.7966 18.0671 20.8994C17.8389 20.9972 17.6442 21.1596 17.5071 21.3666C17.37 21.5736 17.2965 21.8162 17.2955 22.0645V22.1957C17.2955 22.605 17.1329 22.9976 16.8434 23.287C16.554 23.5764 16.1615 23.739 15.7522 23.739C15.3429 23.739 14.9503 23.5764 14.6609 23.287C14.3715 22.9976 14.2089 22.605 14.2089 22.1957V22.1263C14.2029 21.8709 14.1202 21.6232 13.9716 21.4154C13.823 21.2076 13.6153 21.0493 13.3755 20.9611C13.1428 20.8584 12.8846 20.8277 12.6343 20.8731C12.384 20.9185 12.153 21.0378 11.9711 21.2157L11.9248 21.262C11.7815 21.4055 11.6113 21.5194 11.4239 21.597C11.2366 21.6747 11.0358 21.7147 10.8329 21.7147C10.6301 21.7147 10.4293 21.6747 10.242 21.597C10.0546 21.5194 9.8844 21.4055 9.74107 21.262C9.59758 21.1187 9.48375 20.9485 9.40608 20.7611C9.32842 20.5738 9.28844 20.373 9.28844 20.1702C9.28844 19.9673 9.32842 19.7665 9.40608 19.5792C9.48375 19.3918 9.59758 19.2216 9.74107 19.0783L9.78737 19.032C9.96526 18.8501 10.0846 18.6191 10.13 18.3688C10.1754 18.1185 10.1447 17.8603 10.042 17.6276C9.9442 17.3994 9.78178 17.2047 9.57475 17.0676C9.36773 16.9305 9.12513 16.8569 8.87683 16.8559H8.74565C8.33634 16.8559 7.9438 16.6934 7.65438 16.4039C7.36496 16.1145 7.20236 15.722 7.20236 15.3127C7.20236 14.9034 7.36496 14.5108 7.65438 14.2214C7.9438 13.932 8.33634 13.7694 8.74565 13.7694H8.8151C9.07051 13.7634 9.31821 13.6807 9.52601 13.5321C9.73381 13.3835 9.89209 13.1758 9.98028 12.936C10.083 12.7033 10.1136 12.4451 10.0683 12.1948C10.0229 11.9444 9.90353 11.7135 9.72564 11.5316L9.67934 11.4853C9.53585 11.342 9.42202 11.1718 9.34435 10.9844C9.26669 10.7971 9.22671 10.5962 9.22671 10.3934C9.22671 10.1906 9.26669 9.9898 9.34435 9.80245C9.42202 9.61509 9.53585 9.44489 9.67934 9.30156C9.82267 9.15807 9.99288 9.04424 10.1802 8.96657C10.3676 8.88891 10.5684 8.84893 10.7712 8.84893C10.974 8.84893 11.1748 8.88891 11.3622 8.96657C11.5496 9.04424 11.7198 9.15807 11.8631 9.30156L11.9094 9.34785C12.0912 9.52575 12.3222 9.64508 12.5725 9.69047C12.8229 9.73586 13.081 9.70521 13.3138 9.6025H13.3755C13.6037 9.50468 13.7984 9.34226 13.9355 9.13524C14.0726 8.92822 14.1462 8.68562 14.1472 8.43732V8.30614C14.1472 7.89683 14.3098 7.50429 14.5992 7.21487C14.8886 6.92544 15.2811 6.76285 15.6904 6.76285C16.0998 6.76285 16.4923 6.92544 16.7817 7.21487C17.0711 7.50429 17.2337 7.89683 17.2337 8.30614V8.37558C17.2347 8.62389 17.3083 8.86648 17.4454 9.07351C17.5825 9.28053 17.7771 9.44295 18.0054 9.54077C18.2381 9.64348 18.4963 9.67412 18.7466 9.62874C18.9969 9.58335 19.2279 9.46402 19.4098 9.28612L19.4561 9.23982C19.5994 9.09634 19.7696 8.9825 19.957 8.90484C20.1443 8.82717 20.3451 8.7872 20.5479 8.7872C20.7508 8.7872 20.9516 8.82717 21.1389 8.90484C21.3263 8.9825 21.4965 9.09634 21.6398 9.23982C21.7833 9.38315 21.8971 9.55336 21.9748 9.74071C22.0525 9.92807 22.0924 10.1289 22.0924 10.3317C22.0924 10.5345 22.0525 10.7353 21.9748 10.9227C21.8971 11.11 21.7833 11.2802 21.6398 11.4236L21.5935 11.4699C21.4156 11.6517 21.2963 11.8827 21.2509 12.133C21.2055 12.3834 21.2362 12.6415 21.3389 12.8743V12.936C21.4367 13.1642 21.5991 13.3589 21.8061 13.496C22.0132 13.6331 22.2558 13.7067 22.5041 13.7076H22.6352C23.0445 13.7076 23.4371 13.8702 23.7265 14.1597C24.0159 14.4491 24.1785 14.8416 24.1785 15.2509C24.1785 15.6602 24.0159 16.0528 23.7265 16.3422C23.4371 16.6316 23.0445 16.7942 22.6352 16.7942H22.5658C22.3175 16.7952 22.0749 16.8688 21.8679 17.0059C21.6608 17.143 21.4984 17.3376 21.4006 17.5659V17.5659Z" stroke="#C7C7C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Ajustes</p>
                </div>
            </button>
                </a>
            </ul>
        </div>

       <div className="navbar_upgrade">
            <img className='navbar_upgradeImg' src={UpDatePlan} alt=""/>
            <button className="navbar_upgradeButton">Comprar premium
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.43262 8.90073V1.62207" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M0.793945 5.2614L4.43327 1.62207L8.0726 5.2614" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

           </button>
        </div> 
    </div>
    
)};

export default Navbar;