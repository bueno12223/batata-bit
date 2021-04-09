import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    userAcconut: {userId: 'bueno122', email: 'berriojesus122@gmail.com'},
    userPersonalData: {
        visa: {
        },
        transacctions: [
            {to: 'María', date: '12 de Dic', type:'restaurante', ammount: '200$', id: 1  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 2 },
            {to: 'María', date: '12 de Dic', type:'ocio', ammount: '200$', id: 3  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 4 },
            {to: 'María', date: '12 de Dic', type:'transacción', ammount: '200$', id: 5  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 6 },
            {to: 'María', date: '12 de Dic', type:'ocio', ammount: '200$', id: 7  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 8 },
            {to: 'María', date: '12 de Dic', type:'transacción', ammount: '200$', id: 9  },
            ],
        goals: [

        ],
        userStadistics: [14, 18, 90],
        userFriends: [
                {name: 'Ana', email: 'ana@gmail.com', id: 1 },
                {name: 'Luis', email: 'luis@gmail.com',  id: 4 },
                {name: 'maikol',email: 'maikol@gmail.com',  id: 3 },
                {name: 'ginger',email: 'ginger@gmail.com',  id: 6 },
                {name: 'jose',email: 'jose@gmail.com',  id: 5 },
        ]


        
    } 

}
const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}><App></App></Provider>
    , document.getElementById('app')
);
