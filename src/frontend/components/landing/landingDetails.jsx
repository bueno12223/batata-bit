import React from 'react';
import './styles/landingDetails.css'

function landingDetails() {
    return (
        <section className="main-product-detail">
            <span className="batatalogo"></span>
            <div className="product-detail-title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section className="main-flex">
            <section className="product-cards-container">
                <article className="product-detail-card">
                    <span id="clock" className="icon"></span>
                    <p className="product-card-title">Tiempo real</p>
                    <p className="product-card-body">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
                </article>
            </section>
            <section className="product-cards-container">
                <article className="product-detail-card">
                    <span id="eye" className="icon"></span>
                    <p className="product-card-title">No hay tasas escondidas</p>
                    <p className="product-card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </article>
            </section>
            <section className="product-cards-container">
                <article className="product-detail-card">
                    <span id="money" className="icon"></span>
                    <p className="product-card-title">Compara monedas</p>
                    <p className="product-card-body">No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
                </article>
            </section>
            <section className="product-cards-container">
                <article className="product-detail-card">
                    <span id="check" className="icon"></span>
                    <p className="product-card-title">Información confiable</p>
                    <p className="product-card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
                </article>
            </section>
            </section>
            
        </section>
    )
}

export default landingDetails;
