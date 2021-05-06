import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayModal } from '../../../actions';
import './styles/MainModal.css';

function MainModal(props) {
  const { display, children, displayModal } = props;
  const [activate, setActivate] = useState(display);

  useEffect(() => {
    setActivate(display);
  }, [display]);
  return (
    <section className='config-container' style={{ display: activate ? 'inline' : 'none' }}>
      <h3 className='config-header'>{children[0]}</h3>
      <article className='config-body'>
        {children[1]}
      </article>
      <button type='button' className='userModal-close' onClick={() => displayModal('')}>
        <i className='fas fa-times' />
      </button>
    </section>
  );
}
const mapDispachToProps = {
  displayModal,
};
MainModal.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  displayModal: PropTypes.func,
};
export default connect(null, mapDispachToProps)(MainModal);
