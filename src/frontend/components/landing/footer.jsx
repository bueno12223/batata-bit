import React from 'react';
import Batata from '../../images/icons/batata.svg';
import './styles/footer.css';

function footer() {
  return (
    <footer className='footer'>
      <h4 className='footer-left--description'>Este proyecto no es real si no que es parte de mi portafolio, puedes contactarme aquí o en las siguientes redes sociales</h4>
      <section className='footer-left--conatiner'>

        <ul>
          <li><a href='https://www.linkedin.com/in/jesus-adri%C3%A1n-berrio-vald%C3%A9s-8156941a2/'>Linkedin</a></li>
          <li><a href='https://github.com/bueno12223'>GitHub</a></li>
          <li><a href='https://github.com/bueno12223/batatabit'>Repositorio</a></li>
        </ul>
      </section>

      <section className='footer-right-logo'><img src={Batata} alt='Logo de batatabit 2020' /></section>
    </footer>
  );
}

export default footer;
