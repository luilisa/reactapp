import React, { Component } from 'react';
import PortfolioService from '../services/PortfolioService';
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";

class ListPortfolioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }

    deleteUser(id) {
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
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
                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
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

export default ListPortfolioComponent;