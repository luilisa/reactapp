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
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand mb-0 h1" href="/">
                Invest app
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Users</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/create-user">Create user</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/companies">Companies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/portfolios">Portfolios</a>
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