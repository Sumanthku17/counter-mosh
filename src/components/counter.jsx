import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        count : 0
    };

    // constructor()
    // {
    //     super();
    //     this.handleInc = this.handleInc.bind(this);
    // }
    

    handleInc = () =>
    {
        //console.log('inc clicked',this);
        this.setState({count : this.state.count+1})
    }
    
    render() { 


        return (

        <React.Fragment> 
            <span className={this.getBadge()}>{this.counting()}</span>
            <button onClick={this.handleInc} className="btn btn-secondary btn-sm">mine</button>
        </React.Fragment> // handling prob of this pointing to window or undef in two ways 1. using construnctor and bind method 2. using arrow func
        );
    }

    counting()
    {
        return this.state.count === 0 ? "zero" : this.state.count;
    }

    getBadge()
    {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes;
    }




}
 
export default Counter;