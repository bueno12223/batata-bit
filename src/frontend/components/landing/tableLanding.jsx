import React from 'react';
import './styles/tableLanding.css';

import fondo from '../../images/landing/fondoHeader.png';

function tableLanding() {
    return (
        <section className="main-exchange-container">
            <div className="background-img"><img src={fondo} alt=""/></div>
            <div className="main-exchange-container-title">
                <h2>Visibilizamos todas la tazas de cambio</h2>
                <p>Traemos información en tiempo real de las tazas de cambio y las moneda mas importantes del mundo.</p>
            </div>
            <div className="flex-table">
                <section className="main-section-container">
                    <div className="main-currency-table"> 
                        <p className="monedas">Monedas</p>
                        <div className="currency-table-contaier">
                            <table>
                                <tr>
                                    <td className="table-bitcoin">Bitcoin</td>
                                    <td className="table-right-top">$1.96 <span className="down">__</span></td>
                                </tr>
                                <tr>
                                    <td>Etherium</td>
                                    <td className="table-right">$0.07<span className="up">__</span></td>
                                </tr>
                                <tr>
                                    <td className="table-stelar">Stellar</td>
                                    <td className="table-right-bottom">$4.96<span className="down">__</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="date date-rigth"><p><b> Actualizado:</b> 19 de julio a las 23:45</p></div>
                </section>
                <section className="main-section-container">
                    <div className="main-currency-table">
                        <p className="monedas2">Comisiones</p>
                        <div className="currency-table-contaier">
                            <table>
                                <tr>
                                    <td className="table-bitcoin">Bitrade</td>
                                    <td className="table-right-top">$12.96 </td>
                                </tr>
                                <tr>
                                    <td>Etherium</td>
                                    <td className="table-right">$13.07</td>
                                </tr>
                                <tr>
                                    <td className="table-stelar">Coinext</td>
                                    <td className="table-right-bottom">$14.96</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="date date-left"><p><b> Actualizado:</b> 19 de julio a las 23:45</p></div>
                </section>
            </div>
        </section>   
    )
}

export default tableLanding
