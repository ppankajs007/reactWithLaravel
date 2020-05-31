import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faFacebookF,faTwitter,faGlobe } from '@fortawesome/free-solid-svg-icons'
import {Alert} from 'react-bootstrap';
import {login} from './Services/Action';
import {connect} from 'react-redux';
import jwt from 'jsonwebtoken';
import {Redirect,withRouter} from 'react-router-dom';
import history from '../../history'
const userToken = {};
class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error:"",
            email:'',
            password:'',
            closeError:false
		}
        this.onHandleValueError.bind(this);

	}
    onHandleValueError(){
        let email = this.state.email;
        let password = this.state.password;
        let error = "";
        let formValid = true;
        if( (email == '' || typeof email == 'undifined' ) ||
             ( password == '' || typeof password == 'undifined' ) ){
                error = "Please Fill All Field";
                formValid = false;
                this.setState({error:error,closeError:true});
        }
        return formValid;
    }

    onHandleValue(e){
        let fieldName = e.target.name;
        switch(fieldName){
            case 'email':
            this.setState({email:e.target.value});
            break;
            case 'password':
            this.setState({password:e.target.value});   
            break;
        }
    }
	onSubmitHandle(e){
        e.preventDefault();
        if(this.onHandleValueError()){
            this.setState({error:'',closeError:false});
            let loginData = {
                email:this.state.email,
                password:this.state.password,
                history:history
            }
            this.props.login(loginData);
            if(this.props.UserReducer.isAuth){
                this.props.history.push('/dashboard')
            }
        }
	}

    render(){
        const userToken  = this.props.UserReducer;
        return (
            <div>
               <div className="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    { this.state.closeError?
                        <Alert variant="danger" onClose={() => this.setState({closeError:false})} dismissible>
                            <p>{this.state.error}</p>
                        </Alert>:null
                     }                  
                    <form onSubmit={this.onSubmitHandle.bind(this)}>
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" name="email" value={this.state.email||''} onChange={ (e) => this.onHandleValue(e)} placeholder="email" autoComplete="email" />
                                    <i><FontAwesomeIcon icon={faUser} /></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="password" value={this.state.password||''} onChange={ (e) => this.onHandleValue(e)} placeholder="Password" autoComplete="current-password" />
                                    <i><FontAwesomeIcon icon={faLock} /></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="checky-sec">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="cc" id="c1" />
                                        <label htmlFor="c1">
                                            <span></span>
                                        </label>
                                        <small>Remember me</small>
                                    </div>
                                    <a href="#" title="">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <button value="submit">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <div className="login-resources">
                        <h4>Login Via Social Account</h4>
                        <ul>
                            <li><a href="#" title=""  className="fb">Login Via Facebook</a></li>
                            <li><a href="#" title="" className="tw" >Login Via Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

const MapDispachToProps = dispatch => ({
    login:(loginData) => dispatch(login(loginData))

});
const mapStateToProps = state => ({
    UserReducer:state.UserReducer
})

export default connect(mapStateToProps,MapDispachToProps)(Login);
