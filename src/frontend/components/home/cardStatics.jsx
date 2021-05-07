/* eslint-disable no-mixed-operators */
import React from 'react';
import { connect } from 'react-redux';

import './styles/cardStatics.css';

function cardStatics(props) {
  const { userPersonalData: { goals } } = props;
  for (;goals.length <= 3;) {
    goals.push({ title: null, ammount: null, goal: null });
  }
  return (
    <div className='statics_container'>
      <h3 className='statics_title'>Estadísticas de usuario</h3>
      <div className='statics_barsContainer'>
        <StaticBar goals={goals[0]} />
        <StaticBar goals={goals[1]} />
        <StaticBar goals={goals[2]} />
      </div>

    </div>
  );
}

const StaticBar = (props) => {
  const { goals: { ammount, goal, title, icon } } = props;
  return (
    <section className='statics_bar'>
      <span className='statics_barIcon'>
        <i aria-hidden className={`fas fa-${icon || 'sticky-note'}`} />
      </span>
      <div className='statics_barProgesiveContainer'>
        <div className='statics_barProgresive'>
          <div style={{ width: `${ammount / goal * 100 || 0}%` }} className='statics_barProgresiveFill' id='one' />
        </div>
        <p className='statics-barProgresiveDescription'>{ title || 'No tienes una meta que seguir '}</p>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    userPersonalData: {
      goals: state.userPersonalData.goals,
    },
  };
};
export default connect(mapStateToProps, null)(cardStatics);
