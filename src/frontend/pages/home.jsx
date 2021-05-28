import React, { useState } from 'react';
import './styles/home.css';

import Navbar from '../components/home/navbar';
import Header from '../components/home/header';
import Cards from '../components/home/cards';

const Home = () => {
  const [activate, setActivation] = useState(0);
  const handleActivate = () => {
    setActivation(activate + 1);
  };
  return (
    <>
      <div className='border'>
        <Navbar activate={activate} handleActivate={handleActivate} />
        <div className='rigthSection'>
          <div className='header'>
            <Header handleNavbarActivation={() => handleActivate()} />
          </div>
          <div className='cards_container'>
            <Cards />
          </div>
        </div>

      </div>

    </>

  );
};

export default Home;
