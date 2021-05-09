import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        value : this.props.value
    };

    // constructor()
    // {
    //     super();
    //     this.handleInc = this.handleInc.bind(this);
    // }
    
    
    handleInc = () =>
    {
        //console.log('inc clicked',this);
        this.setState({value : this.state.value+1})
    }
    
    render() { 
         console.log('props', this.props);

        return (

        <React.Fragment> 
            
            <span className={this.getBadge()}>{this.counting()}</span>
            <button onClick={this.handleInc} className="btn btn-secondary btn-sm">Inc</button>
            <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            <br />
        </React.Fragment> // handling prob of this pointing to window or undef in two ways 1. using construnctor and bind method 2. using arrow func
        );
    }

    counting()
    {
        return this.state.value === 0 ? "zero" : this.state.value;
    }

    getBadge()
    {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary"
        return classes;
    }




}
 
export default Counter;