import {base_url} from '../../../Constant';
import {USER,LoginUrl} from './Constants';
import axios from 'axios';
import history from '../../../history'
//import {useHistory,Redirect,BrowserHistory} from 'react-router';
export const login = (data) => ( dispatch ) => {
	axios.post(LoginUrl,data,{
		headers:{
			'Accept':'application/json',
			'Contact-type':'application/json',
			'Access-Control-Allow-Origin':'*'
		}
	}).then((resp) => {
			let token = resp.data['success']['token'];
			localStorage.setItem('sessionData',token);
			dispatch({
				type:USER,
				payload:token
			}),
			history.push('/dashboard')
	}).catch((error) => {
		console.log(error)
	})
	
}