import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import history from "./history";
import "../App.css";
import {connect} from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    subs: "Inexpensive alternatives to school/professional tutoring"
                },
                {
                    subs: "Get tutored on your own time"
                },
                {
                    subs: "Seamlessly find and book a tutor in minutes"
                },
                {
                    subs: "Multilingual tutors"
                }
            ],
            tutors: [
                {
                    subs: "Work on your own schedule"
                },
                {
                    subs: "Locate clients like never before"
                },
                {
                    subs: "No tedious certification process"
                },
                {
                    subs: "Quick onboarding procedure"
                }
            ]
        };
    }

    navigate1() {
        if(localStorage.getItem('logged')!=="200"){
            history.push("/login");
        }
        else if(localStorage.getItem('logged')==="200"){
            history.push("/UserHome");
        }
    }
    navigate() {
        history.push("/login");
    }


    renderLogin(){
        if(localStorage.getItem('logged')==="200"){
            return(
                <a
                    className="Home-Login"
                    type="button"
                    onClick={() => {
                        localStorage.clear();
                         history.push('/');
                    }}
                >
                    Log Out
                </a>
            )
        }
        else if(localStorage.getItem('logged')!=="200"){
            return(
                <a
                    className="Home-Login"
                    type="button"
                    onClick={() => history.push("/login")}
                >
                    Login
                </a>
            )
        }
    }

    renderTutor(){

        console.log("Render istutor-->", localStorage.getItem('isTutor'));
        if(localStorage.getItem('isTutor')==="true"){
            return(
                <a  className="Home-Tutor"
                    type="button"
                    onClick={() => history.push('/ViewTutor')}
                >
                    View Tutor
                </a>
            )
        }
        else{
            return(
                <a
                    className="Home-Tutor"
                    type="button"
                    onClick={() => this.navigate1()}
                >Become a Tutor
                </a>
            )
        }
    }

    renderFindTutor(){
        if(localStorage.getItem('logged')==="200"){
            return(<button className="findTutor" onClick={() => history.push('./FindTutor')}>Find Tutors</button>);
        }
        else{
            return( <button className="findTutor" onClick={() => history.push('./login')}>Find Tutors</button>);
        }
    }
    render() {

        console.log("Inside Home-->",localStorage.getItem('logged'));
        return (
            <div>
                <div className="home">
                    <img
                        src={require("../images/Home.JPG")}
                        alt="Background Image"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%"
                        }}
                    />

                    <div className="top-left">
                        <img
                            src={require("../images/Turon_logo_no_background.png")}
                            alt="Turon Logo"
                            style={{ width: "200px", height: "75px" }}
                        />
                    </div>
                    <div className="top-right" id="signInOrOut" />
                    <div className="top-rightT" id="becomeTutor" />

                    <div className="centered">
                        <h1 className="slogan">
                            We pair students with tutors on <u>your</u> campus
                        </h1>
                        <h1 className="slogan2">
                            Turon is the pioneer in college peer to peer tutoring
                            {this.renderFindTutor()}
                        </h1>
                        <h1 />
                    </div>
                </div>

                <div className="topTexts">
                    {this.renderLogin()}
                    {this.renderTutor()}
                </div>

                <div className="aContainer">
                    <div className="centeredTwo">
                        <h1 className="findATutor">
                            Find a tutor for <u>your</u> class
                        </h1>
                    </div>
                    <div className="aRow">
                        <img
                            src={require("../images/New_pin.JPG")}
                            alt="Location"
                            className="Location"
                            style={{ position: "absolute", width: "10%", height: "15%" }}
                        />
                        <img
                            src={require("../images/book.jpg")}
                            alt="book"
                            className="OnDemand"
                            style={{ position: "absolute", width: "10%", height: "15%" }}
                        />
                        <img
                            src={require("../images/New_piggy.JPG")}
                            className="fees"
                            alt="Piggy Bank"
                            style={{ position: "absolute", width: "10%", height: "15%" }}
                        />
                    </div>
                    <div className="aRow">
                        <h1 className="Nearby">Nearby Tutors</h1>
                        <h1 className="Learn">On-Demand</h1>
                        <h1 className="Learn2">In person Tutoring </h1>
                        <h1 className="FreeAnd">Free & Affordable Options</h1>
                    </div>
                </div>
                <div className="Footer-dummy" />

                <div className="aContainer">
                    <div className="theRow">
                        <img
                            src={require("../images/Library.jpg")}
                            alt="Tutor"
                            className="LibraryImg"
                            style={{ position: "absolute", width: "30%", height: "34%" }}
                        />
                        <img
                            src={require("../images/Tutor.jpg")}
                            alt="Tutor"
                            className="TutorImg"
                            style={{ position: "absolute", width: "30%", height: "34%" }}
                        />
                    </div>
                    <div className="theRow" />
                    <div className="theRow">
                        <h2 className="ForStuds">For Students</h2>
                        <h2 className="ForTutor">For Tutors</h2>

                        <div className="Students-points">
                            {this.state.students.map(row => {
                                return (
                                    <div>
                    <span>
                      <img
                          src={require("../images/arrow.jpg")}
                          style={{ width: "25px", height: "10px" }}
                      />
                      <a> </a>
                      <span key={row.subs}>{row.subs}</span>
                      <h1/>
                    </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="tutors-points">
                            {this.state.tutors.map(row => {
                                return (
                                    <div>
                    <span>
                      <img
                          src={require("../images/arrow.jpg")}
                          style={{ width: "25px", height: "10px" }}
                      />
                      <a> </a>
                      <span key={row.subs}>{row.subs}</span>
                      <h1 />
                    </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.stores.login
    };
}
export default connect(mapStateToProps)(Home);