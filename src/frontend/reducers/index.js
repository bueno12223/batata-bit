const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'CLOSE_LOGIN_ERROR':
      return {
        ...state,
        error: false,
      };
    case 'DISPLAY_MODAL':
      return {
        ...state,
        modals: {
          config: action.payload === 'config',
          transacctions: action.payload === 'transacctions',
          goals: action.payload === 'goals',
          depositGoal: action.payload === 'depositGoal',
          deposit: action.payload === 'deposit',
        },

      };
    default:
      return state;

  }
};
export default reducer;
