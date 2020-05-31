import {USER} from './Constants';
import history from '../../../history';
const initialState = {
	userToken:"Token not Urthorized"
}

/*function login(token){
	axios.get('http://127.0.0.1:8000/api/details',{
		headers:{
			'Authorization':'Bearer ' + localStorage.getItem('sessionData')
		}
	}).then((resp)=>{
		let userData = JSON.stringify(resp.data.success);
		return userData;
	}).catch((error) => {
		return error;
	})
}*/

const UserReducer = (state = initialState,action) => {
	switch(action.type){
		case USER:
			return {
				...state,
				userToken:action.payload,
				isAuth:true
			}

		default:
		return state;
	}
}

export default UserReducer;

