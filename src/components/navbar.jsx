import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCount}</span>
                </a>
            </div>
            </nav>
         );
    }
}
 
export default NavBar;