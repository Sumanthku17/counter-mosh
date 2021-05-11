import React, { Component } from 'react';

class Counter extends Component {
    

    // constructor()
    // {
    //     super();
    //     this.handleInc = this.handleInc.bind(this);
    // }
    
    
    

    
    
    render() { 
         console.log("counter called");

        return (

        <React.Fragment> 
            <span className={this.getBadge()}>{this.counting()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            <br />
        </React.Fragment> // handling prob of this pointing to window or undef in two ways 1. using construnctor and bind method 2. using arrow func
        );
    }

    counting()
    {
        return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
    }

    getBadge()
    {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary"
        return classes;
    }




}
 
export default Counter;