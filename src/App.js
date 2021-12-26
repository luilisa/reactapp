import logo from './logo.svg';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateUserComponent from './components/CreateUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
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
            <Route path = "/update-user/:id" element = {<UpdateUserComponent />}/>
           </Routes>
           </div>
           </Router>
          </div> 
    
  );
}

export default App;
