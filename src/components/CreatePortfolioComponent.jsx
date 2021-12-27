import React, { Component } from 'react';
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";
import PortfolioService from '../services/PortfolioService';

class CreatePortfolioComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            profitability: '',
            userId: '',
            redirect: false
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeProfitabilityHandler = this.changeProfitabilityHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.savePortfolio = this.savePortfolio.bind(this);
        
    }


    savePortfolio = (e) => {
        e.preventDefault();
        let portfolio = {name: this.state.name, profitability: this.state.profitability};

        PortfolioService.createPortfolio(portfolio, this.state.userId).then((response) => {
            this.state.redirect = true
            console.log(response.data);
            this.forceUpdate()
        }).catch(error => {
            console.log(error);
        });
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeProfitabilityHandler = (event) => {
        this.setState({profitability: event.target.value});
    }

    changeUserIdHandler = (event) => {
        this.setState({userId: event.target.value});
    }

    render() {
        const { redirect } = this.state;
        console.log(this.state.redirect)
        if (this.state.redirect) {
            return  <Navigate to="/portfolios" /> 
        }
        return (
            <div>
                <br></br>
                <div className = "container" >
                    <div className='row'>
                        <div className='card w-50 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Create Portfolio</h3>
                            <div className='card-body' >
                                <form>
                                    <div className='form-group'>
                                        <input placeholder='Name' name = 'name' className='form-control mb-3'
                                        value = {this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <input placeholder='Profitability' name = 'profitability' className='form-control mb-3'
                                        value = {this.state.profitability} onChange={this.changeProfitabilityHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <input placeholder='UserId' name = 'userId' className='form-control mb-3'
                                        value = {this.state.userId} onChange={this.changeUserIdHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.savePortfolio}>Save </button>
                                    <RouterLink to = "/portfolios">
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

export default CreatePortfolioComponent;