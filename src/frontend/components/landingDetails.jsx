import React from 'react';
import './styles/landingDetails.css'

function landingDetails() {
    return (
        <section class="main-product-detail">
            <span class="batatalogo"></span>
            <div class="product-detail-title">
                <h2>Creamos un producto sin comparación.</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section class="main-flex">
            <section class="product-cards-container">
                <article class="product-detail-card">
                    <span id="clock" class="icon"></span>
                    <p class="product-card-title">Tiempo real</p>
                    <p class="product-card-body">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
                </article>
            </section>
            <section class="product-cards-container">
                <article class="product-detail-card">
                    <span id="eye" class="icon"></span>
                    <p class="product-card-title">No hay tasas escondidas</p>
                    <p class="product-card-body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
                </article>
            </section>
            <section class="product-cards-container">
                <article class="product-detail-card">
                    <span id="money" class="icon"></span>
                    <p class="product-card-title">Compara monedas</p>
                    <p class="product-card-body">No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
                </article>
            </section>
            <section class="product-cards-container">
                <article class="product-detail-card">
                    <span id="check" class="icon"></span>
                    <p class="product-card-title">Información confiable</p>
                    <p class="product-card-body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
                </article>
            </section>
            </section>
            
        </section>
    )
}

export default landingDetails;
