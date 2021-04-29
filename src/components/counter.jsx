import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        count : 1,
        tag : ['tag1','tag2','tag3']
    };
    styles =
    {
        fontWeight : "bold",
        fontSize : 20
    };
    render() { 

        //let classs = this.badgeColorProvision();

        return (

        <React.Fragment> 
            <span style={this.styles} className={this.badgeColorProvision()}>{this.myfunc()}</span>
            <button className="btn btn-secondary btn-sm m-2">my</button> 
            <ul>
                {this.state.tag.map(tag => <li key= {tag}>{tag}</li>)}      
            </ul>
        </React.Fragment> // key need to be specified to take out react warning 
        );
    }

    badgeColorProvision() {
        let classs = "badge m-2 badge-";
        classs += this.co === 0 ? "warning" : "primary";
        return classs;
    }

    myfunc()
    {
        const {count : co} = this.state; //obj destruction
        return co === 0 ? "ZERO" : co;
    }

}
 
export default Counter;