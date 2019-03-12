import React, { Component } from "react";
import { actionlogin } from "../actions/loginactions";
import { connect } from "react-redux";
import history from "./history";
// import {Button} from 'reactstrap';

class ViewTutor extends Component {
    constructor(props) {
        super(props);
        let row=JSON.parse(localStorage.getItem("tutorOne"));
        this.state = {
            row:row
        }
        };

    navigate() {
        history.push("/UserHome");
    }

    render() {
        console.log("Local Storage-->",this.state.row);
        return (
            <div>
                <div className="bgImg2">
                    <img
                        src={require("../images/Loginimg.jpg")}
                        alt="Turon Logo"
                        style={{ width: "100%", height: "110%" }}
                    />
                </div>

                <div className="top-left">
                    <img
                        src={require("../images/Turon_logo_no_background.png")}
                        alt="Turon Logo"
                        style={{ width: "200px", height: "75px" }}
                        onClick={() => {
                            history.push("./");
                        }}
                    />
                </div>

                <div className="container-ViewTutor">
                    <div className="center">
                        <img
                            src={this.state.row.profile}
                            alt="Profile Pic"
                            style={{
                                width: "200px",
                                height: "200px",
                                marginLeft: "10%",
                                marginTop: "-5%"
                            }}
                        />

                        <h1 className="slogan9" id="name">
                            {this.state.row.firstName+" "+this.state.row.lastName}
                        </h1>

                        <h1 className="slogan9a" id="university">
                            University {this.state.row.school}
                        </h1>

                        <h1 className="slogan9b" id="hourlyRate">
                            Hourly Rate: {this.state.row.fees}
                        </h1>

                        <div id="moreInfo" />

                        {/* <button className="cont">Request to Book</button> */}

                        <h2 className="contactInfo">
                            Contact Info
                            <h1 className="contactInfo2"> Phone Number:{this.state.row.phone}</h1>
                            <h1 className="contactInfo3"> Email:{this.state.row.email} </h1>
                        </h2>
                    </div>

                    <h2 className="avail">
                        <h1 className="courses">Availability:{this.state.row.date}</h1>
                    </h2>

                    <div className="userInfo">
                        <h1 className="courses">College Courses:</h1>
                        <ul className="course8a" id="collegeCourses">
                            {" "}
                            Course Numbers:{this.state.row.subject}
                        </ul>
                        <ul className="course8a" id="collegeCourses">
                            {" "}
                            Course Subjects:{this.state.row.subject}
                        </ul>

                        <h1 className="courses">High School Courses:</h1>
                        <ul className="courses" id="highSchoolCourses" />

                        <div id="zip">
                            <h1 className="bio">Zip Code:</h1>
                        </div>
                        <div id="bio">
                            <h1 className="bio">Bio:{this.state.row.about}</h1>
                        </div>

                        <button className="deleteAccount">Delete Account</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        log: data => dispatch(actionlogin(data))
    };
};

const mapStateToProps = stores => {
    console.log(stores);
    return {
        loggedin: stores.stores.login,
        isTutor: stores.stores.isTutor,
        profile: stores.stores.profile
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewTutor);