import axios from 'axios';

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const logInError = (payload) => ({
  type: 'LOGIN_ERROR',
  payload,
});
export const displayModal = (payload) => ({
  type: 'DISPLAY_MODAL',
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
    const date = new Date(Date.now() + 86400e3);
    document.cookie = `email=${payload.email}; expires=${date}; secure`;
    const data = await axios.post('/auth/sign-in', payload);
    dispatch(registerRequest(data.data.user));
    window.location.href = redirectUrl;
  } catch (e) {
    dispatch(logInError(true));

  }
};
export const logOutUser = (payload, redirectUrl) => async (dispatch) => {
  document.cookie = 'email=';
  document.cookie = 'connect.sid=';
  dispatch(CloseLogInError(true));
  window.location.href = redirectUrl;

};

export const configUser = (payload, redirectUrl) => async (dispatch) => {
  try {
    const data = await axios.put('/auth/config-user', payload);
    if (data.status === 200) {
      window.location.href = redirectUrl;
    }
  } catch (e) {
    console.log(e);

  }
};
// save goal
export const saveGoal = (payload, redirectUrl = '/home') => async (dispatch) => {
  try {
    const data = await axios.put('/goal', payload);
    if (data.status === 201) {
      window.location.href = redirectUrl;
    }
  } catch (e) {
    console.log(e);

  }
};
// deposit goal
export const DepositGoal = (payload, redirectUrl = '/home') => async (dispatch) => {
  try {
    const data = await axios.put('/goal/deposit', payload);
    if (data.status === 201) {
      window.location.href = redirectUrl;
    }
  } catch (e) {
    console.log(e);

  }
};
// delete goal
export const DeleteGoal = (payload, redirectUrl = '/home') => async () => {
  try {
    const data = await axios.put('/goal/break', payload);
    if (data.status === 201) {
      window.location.href = redirectUrl;
    }
  } catch (e) {
    console.log(e);

  }
};
// transaccions
export const newTransacction = (payload, redirectUrl) => async (dispatch) => {
  try {
    const data = await axios.put('/transacctions', payload);
    if (data.status === 201) {
      window.location.href = redirectUrl;
    }
  } catch (e) {
    console.log(e);

  }
};
export const Newdeposit = (payload, redirectUrl) => async (dispatch) => {
  try {
    await axios.put('/transacctions/deposit', payload);
    console.log(redirectUrl);
    window.location.href = redirectUrl;
    console.log('yes');
  } catch (e) {
    console.log(e);

  }
};
