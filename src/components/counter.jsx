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
    

    handleInc = (prodId) =>
    {
        console.log(prodId);
        this.setState({count : this.state.count+1})
    }

    doHandleInc = () =>
    {
        this.handleInc({ID : 1});
    }
    
    render() { 


        return (

        <React.Fragment> 
            <span className={this.getBadge()}>{this.counting()}</span>
            
            <button onClick={() =>
            {
                this.handleInc({ID : 1});
            }} className="btn btn-secondary btn-sm">mine</button> 
        </React.Fragment> // if we need to add a parameter to handleInc reference; we add a method 1st, "doHandleInc"  2. then we doHandleInc method and replace with its arrow function
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