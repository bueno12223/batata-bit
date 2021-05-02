import axios from 'axios';

export const doTransaccion = payload => ({
    type: 'DO_TRANSACCION',    
    payload,
    });
    
export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
    });

export const logInError = payload => ({
    type: 'LOGIN_ERROR',
    payload,
    });
export const CloseLogInError = payload => ({
    type: 'CLOSE_LOGIN_ERROR',
    payload,
    });

export const registerUser = (payload, redirectUrl) => async (dispatch) => {
    try {
        await axios.post('/auth/sign-up', payload);
        window.location.href = redirectUrl;
    } catch (error) {
        dispatch(logInError(true));
    }
    };

export const loginUser = (payload, redirectUrl) => async (dispatch) => {
    try {
        let date = new Date(Date.now() + 86400e3);
        document.cookie = `email=${payload.email}; expires=${date}; secure`;
        const data =  await axios.post('/auth/sign-in', payload);
        dispatch(registerRequest(data.data.user));
        window.location.href = redirectUrl;
    } catch (e) {
        dispatch(logInError(true));

    }
};
export const logOutUser = (payload, redirectUrl) => async (dispatch) => {
    document.cookie = `email=`;
    document.cookie = `connect.sid=`;
    dispatch(CloseLogInError(true));
    window.location.href = redirectUrl;

    };

      