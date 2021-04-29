import React, { Component } from 'react';

class Counter extends Component {
    state =
    {
        count : 1,
        tag : []
    };

    renderTags()
    {
        if(this.state.tag.length === 0)
            return <p>no tags available</p>
        return <ul>
            {this.state.tag.map(tag => <li key= {tag}>{tag}</li>)}      
        </ul>
    }
    
    render() { 

        //let classs = this.badgeColorProvision();

        return (

        <React.Fragment> 
            {this.state.tag.length === 0 && "Please create a tag"}
            {this.renderTags()}
        </React.Fragment> // conditions in JSX be like: {this.state.tag.length === 0 && "Please create a tag"} // o/p : Please create a tag
        );
    }


}
 
export default Counter;