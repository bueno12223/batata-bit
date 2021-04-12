import React,{useState} from 'react';
import './styles/home.css';

import Navbar from '../components/home/navbar';
import Header from '../components/home/header';
import Cards from '../components/home/cards';
const Home = () => {
        const [activate, setActivation] = useState(0);
        const handleActivate = () => {
            setActivation(activate + 1)
        }
    return(
    <React.Fragment>
        <div className="border">
        <Navbar activate={activate}  ></Navbar>
        <div className="rigthSection">
        <div className="header">
        <Header handleNavbarActivation={() => handleActivate()}></Header>
        </div>
        <div className="cards_container">
            <Cards></Cards>
        </div>
        </div>

        </div>
        
    </React.Fragment>
    
        
    
)}

export default Home;