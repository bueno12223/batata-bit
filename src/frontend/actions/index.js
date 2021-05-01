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
        console.log(error);
    }
    };

    export const loginUser = (payload, redirectUrl) => async (dispatch) => {
      try {
        const data =  await axios.post('/auth/sign-in', payload);
        console.log(data.body, data.status);
        dispatch(registerRequest(data.data.user));
        let date = new Date(Date.now() + 86400e3);
        // document.cookie = `email=${payload.email}; expires=${date}; secure`;
        window.location.href = redirectUrl;
      } catch (e) {
          dispatch(logInError(true));

      }
      };

      