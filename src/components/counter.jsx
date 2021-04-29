import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        count : 1
    };

    // constructor()
    // {
    //     super();
    //     this.handleInc = this.handleInc.bind(this);
    // }
    

    handleInc = () =>
    {
        console.log('inc clicked',this);
    }
    
    render() { 


        return (

        <React.Fragment> 
            <button onClick={this.handleInc} className="btn btn-secondary btn-sm">mine</button>
        </React.Fragment> // handling prob of this pointing to window or undef in two ways 1. using construnctor and bind method 2. using arrow func
        );
    }


}
 
export default Counter;