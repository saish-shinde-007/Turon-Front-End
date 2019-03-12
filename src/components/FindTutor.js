import React, {Component} from 'react';
import history from "./history";
import {actionfind} from '../actions/loginactions';
import {actiontutor} from '../actions/loginactions';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import '../App.css';


class FindTutor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            university: '',
            subject:'',
            subject2:'',
            course:'',
            course2:''
        };
    }

    // navigate()
    // {
    //     history.push('/login');
    // }

    render() {
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
                    <img src={require("../images/Turon_logo_no_background.png")} alt="Turon Logo"
                         style={{"width":"250px","height":"100px"}}
                         onClick={()=>{
                             history.push("./");
                         }}/>
                </div>
                <h1 align="center" style={{   position: "absolute", top: "7%", left: "39%"}}>College Tutoring</h1>

                <select  className="FindTutor" value={this.state.university}
                         onChange={(event) => {
                             this.setState({
                                 university: event.target.value
                             });
                         }}>
                    <option value="San Jose State University">San Jose State University</option>
                </select>
                <input
                    className="FindTutor1"
                    type="text"
                    placeholder="Select a subject"
                    value={this.state.subject}
                    onChange={(event) => {
                        this.setState({
                            subject: event.target.value
                        });
                    }}
                />
                <input
                    className="FindTutor2"
                    type="text"
                    placeholder="Select a Course"
                    value={this.state.course}
                    onChange={(event) => {
                        this.setState({
                            course: event.target.value
                        });
                    }}
                />
                <Button
                    outline color="primary"
                    className="findbutton"
                    type="button"
                    onClick={() => {
                        this.props.Find(this.state);
                        localStorage.setItem("tutorList",JSON.stringify(this.props.FindData));
                        console.log("TutorList from RDS", this.props.FindData);
                        if(this.props.FindData!=null){
                            history.push('/TutorList');
                        }
                    }
                    }>
                    Search
                </Button>

                {/*<h1 className="Or">Or</h1>*/}
                <h1 className="HighSchool">High School Tutoring</h1>
                <input
                    className="FindTutor3"
                    type="text"
                    placeholder="Select a Course"
                    value={this.state.subject2}
                    onChange={(event) => {
                        this.setState({
                            subject2: event.target.value
                        });
                    }}
                />
                <input
                    className="FindTutor4"
                    type="text"
                    placeholder="Select a Course"
                    value={this.state.course2}
                    onChange={(event) => {
                        this.setState({
                            course2: event.target.value
                        });
                    }}
                />

                <Button
                    outline color="primary"
                    className="findbutton2"
                    type="button"
                    onClick={() => this.props.Tutor(this.state)}>
                    Search
                </Button>
                </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Find : (data) => dispatch(actionfind(data)),
        Tutor : (data) => dispatch(actiontutor(data)),
    };
}

const mapStateToProps =(stores)=> {
    return {
        FindData: stores.stores.FindData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTutor);