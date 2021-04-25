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
        const { data } = await axios.post('/auth/sign-up', payload);
        dispatch(registerRequest(data));
        window.location.href = redirectUrl;
    } catch (error) {
        console.log(error);
    }
    };

    export const loginUser = ({ email, password }, redirectUrl) => {
        return (dispatch) => {
          axios({
            url: '/auth/sign-in/',
            method: 'post',
            auth: {
              username: email,
              password
            },
          })
            .then(({ data }) => {
              document.cookie = `email=${data.user.email}`;
              document.cookie = `name=${data.user.name}`;
              document.cookie = `id=${data.user.id}`;
              document.cookie = `token=${data.user.token}`
              dispatch(loginRequest(data.user));
            })
            .then(() => {
              window.location.href = redirectUrl;
            })
            .catch(err => dispatch(setError(err)));
        }
      };
      