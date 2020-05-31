import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
class Dashboard extends React.Component{
	constructor(props){
		super(props)
	}
    render(){
        return (
            <div>
            {	
            	this.props.UserReducer.userToken
            }
                <h1>Dashboard</h1>
            
            </div>
        )
    }
    
}

const mapStateToProps = state => ({
	UserReducer:state.UserReducer
})

export default connect(mapStateToProps)(Dashboard);
