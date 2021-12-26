import React, { Component } from 'react';
import UserService from '../services/UserService';
import { Link as RouterLink, Navigate, useParams} from "react-router-dom";
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)
        let { id } = this.props.params;
        this.state = {
            id: id,
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
            this.setState({id: user.id, login: user.login, password:user.password});
        });
    }


    updateUser = (e) => {
        let user = {login: this.state.login, password: this.state.password};
        UserService.updateUser(user, this.state.id).then((response) => {
           
            // this.forceUpdate();
            console.log(response.data);
        
        });
        this.state.redirect = true
        this.forceUpdate();
        console.log(this.state.redirect)
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
                            <h3 className='text-center'> Update User</h3>
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


export default withParams(UpdateUserComponent);