const reducer = (state, action) =>{
	switch(action.type){
		case 'DO_TRANSACCION':
			const event = new Date();
			const options = { dateStyle: 'short' };
		return{
			...state,
			userPersonalData : {
				...state.userPersonalData,
				visa: {
					...state.userPersonalData.visa,
					ammount: state.userPersonalData.visa.ammount - action.payload.ammount,
					spend: state.userPersonalData.visa.spend + action.payload.ammount
				},
				transacctions: [{
					to: action.payload.to,
					date: event.toLocaleString('en', options),
					type: 'Transacción rápida',
					ammount: `${action.payload.ammount}$`,
					id: `${action.payload.ammount}${action.payload.to}`
				}, ...state.userPersonalData.transacctions]
			},
			
		}
		case 'REGISTER_REQUEST':
			return {
				...action.payload
			  }
		case 'LOGIN_ERROR':
			return {
				...state,
				error: true
			}
		case 'CLOSE_LOGIN_ERROR':
			return {
				...state,
				error: false
			}
		default:
			return state;
			 
            }
}
export default reducer;