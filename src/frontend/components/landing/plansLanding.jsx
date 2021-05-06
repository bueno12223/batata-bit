import React from 'react';
import { Link } from 'react-router-dom';
import './styles/plansLanding.css';

function plansLanding() {
  return (
    <>
      <section className='bitcoin-img-container'>
        <h2>Conócelo hoy.</h2>
      </section>
      <section id='plans' className='main-pad-container'>
        <div className='plans-title'>
          <h2>Escoge el plan que mejor se ajuste a ti.</h2>
          <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
        </div>
        <section className='container-slider'>
          <article className='plans-container-bar'>
            <p className='container-slider-slide' id='card1'>Recomendado</p>
            <div className='info-container'>
              <h3 className='plan-card-title'>Pago anual</h3>
              <p className='plan-card-price'>
                <span>$</span>
                {' '}
                99
              </p>
              <p className='plan-card-saving'>*Recibes 1 mes gratis de prueba*</p>
              <Link to='/sing-up'>
                <button type='button' id='but1' className='plan-card-CTA '>
                  Escoge este
                  <span />
                </button>
              </Link>
            </div>
          </article>

          <article className='plans-container-bar'>
            <p className='container-slider-slide' id='card2'>Básico</p>
            <div className='info-container'>
              <h3 className='plan-card-title'>Pago mensual</h3>
              <p className='plan-card-price'>
                <span>$</span>
                {' '}
                19
              </p>
              <p className='plan-card-saving'>*Ahorras 129$ comprando el plan mensual*</p>
              <Link to='/sing-up'>
                <button type='button' id='but2' className='plan-card-CTA plan-card-blue'>
                  Escoge este
                  <span />
                </button>
              </Link>

            </div>
          </article>

          <article id='fondo' className='plans-container-bar'>
            <p className='container-slider-slide' id='card3'>Ilimitado</p>
            <div className='info-container2'>
              <h3 id='ultimo' className='plan-card-title'>Pago único</h3>
              <p className='plan-card-price'>
                <span>$</span>
                {' '}
                199
              </p>
              <p className='plan-card-saving'>*Un solo pago y tendras acceso de por vida*</p>
              <Link to='/sing-up'>
                <button type='button' id='but3' className='plan-card-CTA'>
                  Escoge este
                  <span />
                </button>
              </Link>

            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default plansLanding;
