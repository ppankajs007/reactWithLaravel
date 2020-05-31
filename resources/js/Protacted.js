import React from 'react';
import { Route,Redirect } from 'react-router-dom';
const Protacted = ({component:Cmp,...rest}) => (
	<Route 
	{...rest}
		render = {(props)=>
				localStorage.getItem('sessionData')?(
						<Cmp {...props} />
				):
				<Redirect to='/' />
		}
	/>
);

export default Protacted;