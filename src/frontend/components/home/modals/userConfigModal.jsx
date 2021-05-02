import React from 'react';
import './styles/userConfigModal.css' ;

function userConfigModal() {
    return (
        <section className='config-container'>
            <h1>Ajustes de la cuenta</h1>
                <form>
                    <input placeholder='usuario'  type="email" className="config-input"/>
                    <input placeholder='nombre y apellido' type="text" className="config-input"/>
                    <input placeholder='correo' type="text" className="config-input"/>
                    <input  placeholder='contraseña' type="password" className="config-input"/>
                    <input value="Guardar" type="submit"/>
                </form>
            
        </section>
    )
}

export default userConfigModal
