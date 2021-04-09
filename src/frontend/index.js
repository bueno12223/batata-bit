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
            numbers: '1230 **** **** 1020',
            name: 'jesus Berrios',
            date: '07/25',
            ammount: 2000,
            incomer: 150,
            spend: 100,
            progesiveBar: 90
        },
        transacctions: [
            {to: 'María', date: '12 de Dic', type:'restaurante', ammount: '200$', id: 1  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 2 },
            {to: 'María', date: '12 de Dic', type:'ocio', ammount: '200$', id: 3  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 4 },
            {to: 'María', date: '12 de Dic', type:'transacción', ammount: '200$', id: 5  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 2 },
            {to: 'María', date: '12 de Dic', type:'ocio', ammount: '200$', id: 3  },
            { to: 'Jose', date: '10 de Dic', type:'comida', ammount: '50$', id: 4 },
            {to: 'María', date: '12 de Dic', type:'transacción', ammount: '200$', id: 5  },
            ],
        goals: [
            {ammount: 15, date: '12/82/12', title: 'Vacaciones', id: 1},
            {ammount: 101, date: '12/12/72', title: 'ahorros', id: 3},
            {ammount: 9, date: '22/12/12', title: 'Juegos', id: 2},
            {ammount: 101, date: '12/12/72', title: 'ahorros', id: 5},
            {ammount: 9, date: '22/12/12', title: 'Juegos', id: 6}
        ],
        userStadistics: [14, 18, 90],
        userFriends: [
                {name: 'Ana',  id: 1 },
                {name: 'Luis',  id: 2 },
                {name: 'Jhon',  id: 3 },
                {name: 'Mike',  id: 4 },
                {name: 'Mia',  id: 5 },
                {name: 'Add New', id: 6 }
        ]


        
    } 

}
const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}><App></App></Provider>
    , document.getElementById('app')
);
