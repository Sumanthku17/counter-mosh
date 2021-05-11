import React, { Component } from 'react';

const navBar = (props) => {// if u don't have any states or methods defined in a comp.. u can change it to StateLess Functional Component[SFC].
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
 
export default navBar;
