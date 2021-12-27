import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
  
        return (
          <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mb-0 h1" href="/">
                Invest app
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Users</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create-user">Create user</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/companies">Companies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stocks">Stocks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolios">Portfolios</a>
            </li>
          </ul>
        </div>
            </nav>
          </header>
          </div>
        )
      }
}
export default HeaderComponent