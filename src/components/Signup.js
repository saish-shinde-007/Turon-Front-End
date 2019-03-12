import React, {Component} from 'react';
import history from "./history";
import {actionsign} from '../actions/loginactions';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import '../App.css';


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            university: '',
            firstName:'',
            lastName:'',
            email:'',
            password: '',
            confirmPassword:'',
            ZipCode:''
        };
    }

    navigate()
    {
        history.push('/login');
    }

    render() {

        if (this.props.signin===200){
            alert("sign up successfull");
            this.navigate();
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


                <div className="cardoutline-SignUp ">
                        <div className="Welcome-signup">
                            Signup
                        </div>
                    <select  className="Signup-university" value={this.state.university}
                             onChange={(event) => {
                                 this.setState({
                                     university: event.target.value
                                 });
                             }}>
                        <option value="San Jose State University">San Jose State University</option>
                        <option value="San Deigo State University">San Diego State University</option>
                    </select>
                            <input
                                className="Signup-firstName"
                                type="text"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={(event) => {
                                    this.setState({
                                        firstName: event.target.value
                                    });
                                }}
                            />
                         <input
                                className="Signup-lastName"
                                type="text"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={(event) => {
                                    this.setState({
                                        lastName: event.target.value
                                    });
                                }}
                          />
                        <input
                            className="Signup-email"
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(event) => {
                            this.setState({
                                email: event.target.value
                            });
                        }}
                        />
                        <input
                            className="Signup-password"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={(event) => {
                            this.setState({
                                password: event.target.value
                            });
                        }}
                        />
                        <input
                        className="Signup-confirm-password"
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={(event) => {
                            this.setState({
                                confirmPassword: event.target.value
                            });
                        }}
                        />
                        <input
                        className="Signup-Zipcode"
                        type="text"
                        placeholder="ZipCode"
                        value={this.state.ZipCode}
                        onChange={(event) => {
                            this.setState({
                                ZipCode: event.target.value
                            });
                        }}
                        />
                         <Button
                                outline color="primary"
                                className="real-signup-btn"
                                type="button"
                                onClick={() => this.props.Sign(this.state)}>
                                Submit
                            </Button>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Sign : (data) => dispatch(actionsign(data)),
    };
}

const mapStateToProps =(stores)=> {

    return {
        signin: stores.stores.status
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);