import React, { Component } from 'react';
import StockService from '../services/StockService';
import { Link as RouterLink, Navigate, useParams } from "react-router-dom";

class ListStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stocks: []
        }
        this.deleteStock = this.deleteStock.bind(this);
    }

    componentDidMount() {
        StockService.getStocks().then((res) => {
            this.setState({stocks: res.data});
        });
    }

    deleteStock(id) {
        StockService.deleteStock(id).then( res => {
            this.setState({stocks: this.state.stocks.filter(stock => stock.id !== id)});
        });
    }

    render() {
        return (
            <div>
                 <br></br>
                 <RouterLink to = {"/create-stock"}>
                         <button className="btn btn-info">Create stock </button>
                </RouterLink>
                 <div className = "row"> 
                 <table className = "table table-striped table-bordered" >
                     <thead className="thead-dark">
                         <tr>
                             <th>Id</th>
                             <th>Symbol</th>
                             <th>Current Price</th>
                             <th>Actions</th>
                         </tr>
                     </thead>

                     <tbody>
                         {
                             this.state.stocks.map(
                                stock => 
                                 <tr key = {stock.id}>
                                 <td> {stock.id} </td>
                                 <td> {stock.symbol} </td>
                                 <td> {stock.currentPrice} </td>
                                 <td>
                                 <RouterLink to = {`/update-stock/${stock.id}`}>
                                    <button className="btn btn-info">Update </button>
                                </RouterLink>
                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStock(stock.id)} className="btn btn-danger">Delete </button>
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

export default ListStockComponent;