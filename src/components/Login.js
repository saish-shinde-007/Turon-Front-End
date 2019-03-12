import React, {Component} from 'react';
import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";
import {Button} from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: ''
        };
    }

    navigate()
    {
        history.push('/UserHome');
    }


    render() {

        if (localStorage.getItem('logged')==="200" && localStorage.getItem('isTutor')==="true") {
           history.push('/')
        }else if(localStorage.getItem('logged')==="200")
            {
                 history.push('/');
                // localStorage.setItem('logged',this.props.loggedin);
                // this.navigate();
            }
        return (
            <div>
                <div className="bgImg">
                    <img
                        src={require("../images/Loginimg.jpg")}
                        alt="Turon Logo"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="Footer-dummy2" />
                <div className="Footer-dummy3" />
                <div className="top-left">
                    <img
                        src={require("../images/Turon_logo_no_background.png")}
                        alt="Turon Logo"
                        style={{ width: "200px", height: "75px" }}
                        onClick={()=>{
                            history.push("./");
                        }}
                    />
                </div>
                <div className="cardoutline">
                    <div className="Welcome" >
                        Login
                    </div>
                            <input
                                className="emailbox"
                                type="text"
                                label="Email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                            <input
                                className="passwordbox"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                            <Button
                                className="Login-btn"
                                type="button"
                                onClick={() => this.props.log(this.state)}>
                                Login
                            </Button>
                    <Button
                        className="New-User-btn"
                        type="link"
                        onClick={() => history.push('/signup')}>
                        New User? SignUp Here!
                    </Button>

                </div>            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionlogin(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.stores.login,
        isTutor : stores.stores.isTutor,
        profile:stores.stores.profile
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
