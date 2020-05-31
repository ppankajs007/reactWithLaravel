import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock,faFacebookF,faTwitter,faGlobe } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import {onSubmitHandle} from './Services/Action';
class Register extends React.Component{
    render(){
        return (
            <div>
            <div className="sign_in_sec" id="tab-2">
               <div className="dff-tab current" id="tab-3">
               <h3>Sign up</h3>
                    <form autoComplete="off" onSubmit={()=>this.onSubmitHandle(e)} >
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" name="name" placeholder="Full Name" />
                                    <i><FontAwesomeIcon icon={faUser} /></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="email" name="email" placeholder="email" autoComplete="off" />
                                    <i><FontAwesomeIcon icon={faGlobe} /></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <select>
                                        <option>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <i className="la la-dropbox"></i>
                                    <span><i className="fa fa-ellipsis-h"></i></span>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="password" placeholder="Password" autoComplete="off" />
                                    <i><FontAwesomeIcon icon={faLock} /></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="repeat-password" placeholder="Repeat Password" autoComplete="off" />
                                    <i><FontAwesomeIcon icon={faLock} /></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="checky-sec st2">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="cc" id="c2" />
                                        <label htmlFor="c2">
                                            <span></span>
                                        </label>
                                        <small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <button value="submit">Get Started</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
    
}

const MapDispachToProps = dispach=>({
    register:() => dispach(register())
})
const mapStateToProps=state=>(
    {

    }
)

export default connect(mapStateToProps,MapDispachToProps)(Register);
