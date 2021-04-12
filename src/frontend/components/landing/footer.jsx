import React from 'react';
import Batata from '../../images/icons/batata.svg';
import './styles/footer.css';
function footer() {
    return (
            <footer>
            <section className="left">
                <ul>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Crunchbase</a></li>
                    <li><a href="">Hackernews</a></li>
                </ul> 
            </section>
            <section className="right"><img src={Batata} alt="Logo de batatabit 2020"/></section>
        </footer>
    )
}

export default footer
