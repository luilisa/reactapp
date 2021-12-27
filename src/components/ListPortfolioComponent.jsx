import React, { Component } from 'react';
import PortfolioService from '../services/PortfolioService';
import { Link as RouterLink } from "react-router-dom";

class ListPortfolioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            portfolios: []
        }
        this.deletePortfolio = this.deletePortfolio.bind(this);
    }

    componentDidMount() {
        PortfolioService.getPortfolios().then((res) => {
            this.setState({portfolios: res.data});
        });
    }

    deletePortfolio(id) {
        PortfolioService.deletePortfolio(id).then( res => {
            this.setState({portfolios: this.state.portfolios.filter(portfolio => portfolio.id !== id)});
        });
    }

    render() {
        return (
            <div>
                 <br></br>
                 <RouterLink to = {"/create-portfolio"}>
                         <button className="btn btn-info">Create portfolio </button>
                     </RouterLink>
                 <div className = "row"> 
                 <table className = "table table-striped table-bordered"  >
                     <thead className="thead-dark">
                         <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Profitability</th>
                             <th>Owner</th>
                             <th>Actions</th>
                         </tr>
                     </thead>

                     <tbody>
                         {
                            this.state.portfolios.map(
                                portfolio => 
                                <tr key = {portfolio.id}>
                                <td> {portfolio.id} </td>
                                <td> {portfolio.name} </td>
                                <td> {portfolio.profitability} </td>
                                <td> {portfolio.userEntity.id} </td>
                            
                                <td> 
                                <RouterLink to = {`/update-portfolio/${portfolio.id}`}>
                                <button className="btn btn-info">Update </button>
                                 </RouterLink>
                            <button style={{marginLeft: "10px"}} onClick={ () => this.deletePortfolio(portfolio.id)} className="btn btn-danger">Delete </button>
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