import React, { useState } from 'react';
import './styles/MainModal.css';

function MainModal(props) {
  const { display, children } = props;
  const [activate, setActivate] = useState(display);
  return (
    <section className='config-container' style={{ display: activate ? 'inline' : 'none' }}>
      <h3 className='config-header'>{children[0]}</h3>
      <article className='config-body'>
        {children[1]}
      </article>
      <button type='button' className='userModal-close' onClick={() => setActivate(false)}>
        <i className='fas fa-times' />
      </button>
    </section>
  );
}

export default MainModal;
