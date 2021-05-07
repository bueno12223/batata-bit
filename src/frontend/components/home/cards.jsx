import React from 'react';

// left components
import CardVisa from './cardVisa';
import CardHistory from './cardHistory';

// rigth components
import CardGoal from './cardGoal';
import CardStatics from './cardStatics';
import Transactions from './cardTransacions';

// modals
import UserConfigModal from './modals/userConfigModal';
import DepositModal from './modals/depositModal';
import GoalsModal from './modals/goalsModals';
import './styles/cards.css';

const Cards = () => {
  return (
    <div className='cards_container'>
      <UserConfigModal />
      <DepositModal />
      <GoalsModal />

      <div className='cards_leftContainer'>
        <div className='card card_LeftOverview'><CardVisa /></div>
        <div className='card card_LeftHistory'><CardHistory /></div>
      </div>
      <div className='cards_RigthContainer'>
        <div className='card_RightGoal'><CardGoal /></div>
        <div className='card card_RigthStatics'><CardStatics /></div>
        <div className='card card_RigthTransactions'><Transactions /></div>
        <div className='card card_RigthGreate'>
          <svg className='loal_svg' width='168' height='184' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <mask id='a' mask-type='alpha' maskUnits='userSpaceOnUse' x='9' y='0' width='159' height='184'><rect x='9.9' y='.6' width='157.9' height='183' rx='19' fill='url(#paint0_linear)' /></mask>
            <g mask='url(#a)'>
              <path d='M33.2 42.2a16.4 16.4 0 11-32.8 0 16.4 16.4 0 0132.8 0zM80.7 42.2a16.4 16.4 0 11-32.9 0 16.4 16.4 0 0132.9 0z' fill='#D15842' />
              <path d='M62.2 22.5a16.4 16.4 0 11-32.9 0 16.4 16.4 0 0133 0z' fill='#D15842' />
              <path d='M33.2 42.2c0 9-7.3 16.4-16.4 16.4h47.4a16.4 16.4 0 01-16-19.8l-2.4.1c-8 0-14.6-5.6-16.1-13.2H16.9c9 0 16.3 7.4 16.3 16.5zM29.7 25.7a16.5 16.5 0 01.2-7.4c-1.4 2.5-5.5 7.4-11 7.4h10.8zM112.5 29.2a10.9 10.9 0 11-21.8 0 10.9 10.9 0 0121.8 0zM143.9 29.2a10.9 10.9 0 11-21.8 0 10.9 10.9 0 0121.8 0z' fill='#D15842' />
              <path d='M131.7 16.2a10.9 10.9 0 11-21.8 0 10.9 10.9 0 0121.8 0z' fill='#D15842' />
              <path d='M112.5 29.2c0 6-4.9 10.9-10.9 10.9H133A10.9 10.9 0 01122.4 27h-1.6c-5.3 0-9.7-3.7-10.7-8.7h-8.5c6 0 10.9 4.9 10.9 10.9z' fill='#D15842' />
              <path d='M110.1 18.3a10.9 10.9 0 01.2-4.9c-1 1.6-3.7 5-7.3 5h7.1z' fill='#D15842' />
              <circle cx='80.8' cy='79.7' r='14.6' transform='rotate(-30 80.8 79.7)' fill='#D15842' />
              <path d='M86.7 80c.5 1 .6 1.8.4 2.8-.3 1-.8 1.8-1.6 2.6l.6 1c.2.4.2.7.1 1 0 .4-.2.6-.5.8-.3.2-.6.2-1 0-.3 0-.5-.2-.7-.5l-.6-1a6.4 6.4 0 01-4 .5c-.5 0-.8-.3-1-.6-.2-.3-.2-.6-.1-.9 0-.3.3-.5.5-.7.3-.1.5-.2.7-.1H81c.4 0 .8 0 1.3-.2l-2-3.4c-2.6.9-4.5.4-5.6-1.5-.5-1-.7-2-.4-3a5 5 0 011.9-2.6l-.3-.6c-.2-.3-.3-.6-.2-1 .1-.3.3-.5.6-.7.3-.2.6-.2 1 0 .2 0 .5.2.7.5l.3.6c1.1-.4 2.2-.5 3.1-.3.5 0 .9.3 1 .6a1.2 1.2 0 01-.3 1.6l-.6.2h-2l2 3.3c1.2-.4 2.3-.5 3.1-.2.8.2 1.5.8 2 1.8zm-10-1.5c.3.4.6.6 1 .7H79l-1.7-3c-.4.4-.7.8-.8 1.2-.1.4 0 .7.1 1zm7.6 4.8l.5-1-.1-1c-.2-.3-.5-.5-.8-.6-.3-.2-.7-.2-1.2-.2l1.6 2.8z' fill='#ED654C' />
              <circle cx='43.3' cy='106.1' r='14.6' transform='rotate(30 43.3 106)' fill='#D15842' />
              <path d='M46 111.3c-.6 1-1.3 1.5-2.3 1.8-1 .3-2 .2-3-.1l-.7 1c-.1.4-.4.6-.7.6h-1l-.5-.8.1-1 .6-1-1.5-1.3c-.4-.5-.7-1.1-1-1.9-.1-.4 0-.8.1-1.2l.7-.5a1.1 1.1 0 011.4.7l.6 1.3.9 1 2-3.5c-2.1-1.8-2.6-3.6-1.5-5.6.5-1 1.3-1.5 2.3-1.8 1-.2 2.1-.1 3.2.3l.4-.5c.2-.4.4-.5.7-.6.3-.1.7 0 1 .1.3.2.4.4.5.7.1.4 0 .7-.1 1l-.4.6c.9.8 1.5 1.6 1.8 2.5.2.5.2.9 0 1.2a1.2 1.2 0 01-1.6.5.9.9 0 01-.4-.4c-.1-.5-.5-1-1-1.7l-1.9 3.3c1 1 1.6 1.8 1.8 2.6.2.8 0 1.7-.5 2.7zm-3.7-9.4c-.2.4-.3.8-.2 1.2.1.4.4.8.8 1.2l1.7-3h-1.4c-.4 0-.7.3-.9.6zm-.4 9H43c.4-.2.6-.4.8-.7.2-.3.2-.6.2-1 0-.3-.2-.7-.5-1l-1.6 2.7z' fill='#ED654C' />
            </g>
            <defs>
              <linearGradient id='paint0_linear' x1='88.9' y1='.6' x2='88.9' y2='183.7' gradientUnits='userSpaceOnUse'>
                <stop stopColor='#70BDF0' />
                <stop offset='1' stopColor='#90C9EF' />
              </linearGradient>
            </defs>
          </svg>
          <p className='loal_title'>
            Obten un
            <br />
            préstamo
          </p>
        </div>

      </div>

    </div>

  );
};

export default Cards;
