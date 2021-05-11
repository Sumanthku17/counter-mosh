import React, { Component } from 'react';

const navBar = (props) => {// if u don't have any states or methods defined in a comp.. u can change it to StateLess Functional Component[SFC].
    console.log("NavBar called");
    return ( 
         
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{props.totalCount}</span>
            </a>
        </div>
        </nav>
         
     );
}
 
export default navBar;
