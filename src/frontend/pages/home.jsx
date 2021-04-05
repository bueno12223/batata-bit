import React from 'react';
import './styles/home.css';

import Navbar from '../components/navbar';
import Header from '../components/header';
import Cards from '../components/cards';
const Home = () => (
    <React.Fragment>
        <div className="border">
        <Navbar></Navbar>
        <div className="rigthSection">
        <div className="header">
        <Header></Header>
        </div>
        <div className="cards_container">
            <Cards></Cards>
        </div>
        </div>

        </div>
        
    </React.Fragment>
    
        
    
)

export default Home;