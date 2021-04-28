import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        count : 0
    };
    render() { 
        return (
        <React.Fragment> 
            <span>{this.myfunc()}</span>
            <button>my</button> 
        </React.Fragment>
        );
    }

    myfunc()
    {
        const {count : co} = this.state;
        return co === 0 ? "ZERO" : co;
    }

}
 
export default Counter;