import React, {Component} from 'react';
import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';
import ImageLoader from 'react-image-file';
import history from "./history";
// import {Button} from 'reactstrap';

class TutorList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tutors:this.getItemsFromLocalStorage()
        };
    }

    getItemsFromLocalStorage() {
        try {
            const items = localStorage.getItem("tutorList");
            return JSON.parse(items, null, -1);
        } catch (err) {
            return []
        }
    }

    render() {

        return (
            <div>
                {console.log(this.state.tutors)}
                <Table hover>
                    <thead>
                    <tr>
                        <th>Profile</th>
                        <th>Professor</th>
                        <th>Subject</th>
                        <th>Days</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.tutors.map(row => {
                        return(
                            <tr onClick={()=>{
                                localStorage.setItem("tutorOne",JSON.stringify(row));
                                history.push("/ViewTutor");
                            }}>
                                <td key={row.profile}>
                                    {console.log("BLOB image-->", row.profile)}
                                <img src={row.profile} alt={"Alt text"}/></td>
                                <td key={row.teacher}>{row.teacher}</td>
                                <td key={row.subject}>{row.subject}</td>
                                <td key={row.date}>{row.date}</td>
                            </tr>
                        );
                    })
                    };
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        log : (data) => dispatch(actionlogin(data))
    };
};
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        loggedin : stores.stores.login,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TutorList);
