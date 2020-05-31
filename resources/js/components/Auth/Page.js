import React from 'react';
import ReactDOM from 'react-dom';
import {asset} from '../../Constant';
import componentCss from '../../component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faFacebookF,faTwitter,faGlobe } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Link, Switch,withRouter } from "react-router-dom";
class Page extends React.Component{
    constructor(){
        super();
        this.state = {
            userForm:false
        }
    }

    handleForm(i){
        if( this.state.userForm != i ){
            this.setState({userForm:i});
        }
    }

    render(){
        return (
            <div>
                <div className="wrapper sign-in">       
                    <div className="sign-in-page">
                        <div className="signin-popup">
                            <div className="signin-pop">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="cmp-info">
                                            <div className="cm-logo">
                                                <img src={`${asset}images/cm-logo.png`} alt="" />
                                                    <p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                                            </div>    
                                            <img src={`${asset}images/cm-main-img.png`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="login-sec">
                                            <ul className="sign-control">
                                                <li data-tab="tab-1" className={this.state.userForm?null:"current"} onClick={this.handleForm.bind(this,false)} ><a href={void(0)} title="">Sign in</a></li>              
                                                <li data-tab="tab-2" className={this.state.userForm?"current":null} onClick={this.handleForm.bind(this,true) }><a href={void(0)} title="">Sign up</a></li>              
                                            </ul>

                                           {
                                                this.state.userForm?
                                                <Register />:
                                                <Login />
                                           }
                                                
                                                    
                                           
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </div>
                        <div className="footy-sec">
                            <div className="container">
                                <ul>
                                    <li><a href="help-center.html" title="">Help Center</a></li>
                                    <li><a href="about.html" title="">About</a></li>
                                    <li><a href="#" title="">Privacy Policy</a></li>
                                    <li><a href="#" title="">Community Guidelines</a></li>
                                    <li><a href="#" title="">Cookies Policy</a></li>
                                    <li><a href="#" title="">Career</a></li>
                                    <li><a href="forum.html" title="">Forum</a></li>
                                    <li><a href="#" title="">Language</a></li>
                                    <li><a href="#" title="">Copyright Policy</a></li>
                                </ul>
                                <p><img src={`${asset}images/copy-icon.png`} alt="" />Copyright 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
    
}

export default Page;
