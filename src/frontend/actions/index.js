import axios from 'axios';

export const doTransaccion = payload => ({
    type: 'DO_TRANSACCION',    
    payload,
    });
    
export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
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
        const data=  await axios.post('/auth/sign-in', payload);
        dispatch(registerRequest(data.data.user));
        document.cookie = `email=${payload.email}`;
        window.location.href = redirectUrl;
      } catch (error) {
          console.log(error);
      }
      };

      