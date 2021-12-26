import React, { Component } from 'react';
import UserService from '../services/UserService';
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
       
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }

    render() {
        return (
            <div>
                 <br></br>
                 <div className = "row"> 
                 <table className = "table table-striped table-bordered" >
                     <thead className="thead-dark">
                         <tr>
                             <th>Id</th>
                             <th>Login</th>
                             <th>Actions</th>
                         </tr>
                     </thead>

                     <tbody>
                         {
                             this.state.users.map(
                                 user => 
                                 <tr key = {user.id}>
                                 <td> {user.id} </td>
                                 <td> {user.login} </td>
                                 <td>
                                 <RouterLink to = {`/update-user/${user.id}`}>
                                    <button className="btn btn-info">Update </button>
                                </RouterLink>
                                 </td>
                                 </tr>
                             )
                         }
                     </tbody>
                 </table>
                </div>
            </div>
        );
    }
}

export default ListUserComponent;