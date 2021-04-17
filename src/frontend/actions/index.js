import axios from 'axios';

export const doTransaccion = payload => ({
    type: 'DO_TRANSACCION',    
    payload,
    });
export const registerUser = (payload, redirectUrl) => async (dispatch) => {
    try {
        const { data } = await axios.post('/auth/sign-up', payload);
        dispatch(registerRequest(data));
        window.location.href = redirectUrl;
    } catch (error) {
        console.log(error);
    }
    };