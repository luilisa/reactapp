import React, { Component } from 'react';
import UserService from '../services/UserService';
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            login: '',
            password: '',
            redirect: false
        }
        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
        
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then((response) => {
            let user = response.data;
            this.setState({login: user.login, password:user.password});
        });
    }


    updateUser = (e) => {
        e.preventDefault();
        let user = {login: this.state.login, password: this.state.password};
        this.forceUpdate();
        console.log(JSON.stringify(user));
    }

    changeLoginHandler = (event) => {
        this.setState({login: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        const { redirect } = this.state;
        console.log(this.state.redirect)
        if (this.state.redirect) {
            return  <Navigate to="/users" /> 
        }
        return (
            <div>
                <br></br>
                <div className = "container" >
                    <div className='row'>
                        <div className='card w-50 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Create User</h3>
                            <div className='card-body' >
                                <form>
                                    <div className='form-group'>
                                        <input placeholder='Login' name = 'login' className='form-control mb-3'
                                        value = {this.state.login} onChange={this.changeLoginHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <input placeholder='Password' name = 'password' className='form-control mb-3'
                                        value = {this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateUser}>Confirm </button>
                                    <RouterLink to = "/users">
                                    <button className='btn btn-danger' style={{marginLeft: "10px"}}>Cancel</button>
                                    </RouterLink>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default UpdateUserComponent;