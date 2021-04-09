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

            ],
        goals: [
        ],
        userFriends: [
        ]


        
    } 

}
const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}><App></App></Provider>
    , document.getElementById('app')
);
