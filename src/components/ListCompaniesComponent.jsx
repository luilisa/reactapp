import React, { Component } from 'react';
import CompanyService from '../services/CompanyService';
import { Link as RouterLink } from "react-router-dom";

class ListCompaniesComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companies: []
        }
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    componentDidMount() {
        CompanyService.getCompanies().then((res) => {
            this.setState({companies: res.data});
        });
    }

    deleteCompany(id) {
        CompanyService.deleteCompany(id).then( res => {
            this.setState({companies: this.state.companies.filter(company => company.id !== id)});
        });
    }

    render() {
        return (
            <div>
                 <br></br>
                 <RouterLink to = {"/create-company"}>
                         <button className="btn btn-info">Create company </button>
                     </RouterLink>
                 <div className = "row"> 
                 <table className = "table table-striped table-bordered"  >
                     <thead className="thead-dark">
                         <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Symbol</th>
                             <th>Sector</th>
                             <th>Market Cap</th>
                             <th>IPO year</th>
                             <th>Country</th>
                             <th>Actions</th>
                         </tr>
                     </thead>

                     <tbody>
                         {
                            this.state.companies.map(
                                company => 
                                <tr key = {company.id}>
                                <td> {company.id} </td>
                                <td> {company.name} </td>
                                <td> {company.symbol} </td>
                                <td> {company.sector} </td>
                                <td> {company.marketCap} </td>
                                <td> {company.ipoYear} </td>
                                <td> {company.country} </td>
                            
                                <td> 
                                <RouterLink to = {`/update-company/${company.id}`}>
                                <button className="btn btn-info">Update </button>
                                 </RouterLink>
                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompany(company.id)} className="btn btn-danger">Delete </button>
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

export default ListCompaniesComponent;