import logo from './logo.svg';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import UpdatePortfolioComponent from './components/UpdatePortfolioComponent';
import ListPortfolioComponent from './components/ListPortfolioComponent';
import CreatePortfolioComponent from './components/CreatePortfolioComponent';
import ListCompaniesComponent from './components/ListCompaniesComponent';
import CreateCompanyComponent from './components/CreateCompanyComponent';
import CreateStockComponent from './components/CreateStockComponent';
import UpdateCompanyComponent from './components/UpdateCompanyComponent';
import UpdateStockComponent from './components/UpdateStockComponent';
import ListStockComponent from './components/ListStockComponent';
function App() {
  return (
      <div className="App">
        <Router>
          <HeaderComponent/>
          <div className='container'>
          <Routes>
            <Route  path = "/" element = {<ListUserComponent />}/>
            <Route  path = "/users" element = {<ListUserComponent />}/>
            <Route path = "/create-user" element = {<CreateUserComponent />}/>
            <Route path = "/create-stock" element = {<CreateStockComponent />}/>
            <Route path = "/update-user/:id" element = {<UpdateUserComponent />}  />
            <Route  path = "/portfolios" element = {<ListPortfolioComponent />}/>
            <Route  path = "/companies" element = {<ListCompaniesComponent />}/>
            <Route  path = "/create-company" element = {<CreateCompanyComponent />}/>
            <Route  path = "/create-portfolio" element = {<CreatePortfolioComponent />}/>
            <Route  path = "/update-portfolio/:id" element = {<UpdatePortfolioComponent />}/>
            <Route  path = "/update-company/:id" element = {<UpdateCompanyComponent />}/>
            <Route  path = "/update-stock/:id" element = {<UpdateStockComponent />}/>
            <Route  path = "/stocks" element = {<ListStockComponent />}/>
           </Routes>
           </div>
           </Router>
          </div> 
    
  );
}

export default App;
