import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        count : 0
    };
    styles =
    {
        fontWeight : "bold",
        fontSize : 20
    };
    render() { 
        return (
        <React.Fragment> 
            <span style={this.styles} className="badge badge-primary m-2">{this.myfunc()}</span>
            <button className="btn btn-secondary btn-sm m-2">my</button> 
        </React.Fragment>
        );
    }

    myfunc()
    {
        const {count : co} = this.state; //obj destruction
        return co === 0 ? "ZERO" : co;
    }

}
 
export default Counter;