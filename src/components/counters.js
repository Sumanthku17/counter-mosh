import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        arr : [
            { id:1, value:0 },
            { id:2, value:0 },
            { id:3, value:5 },
            { id:4, value:0 },
        ]
     }

     handleDelete = () =>
     {
        console.log("handling del");
     }

    render() { 
        return (
            <div>
                {this.state.arr.map(ctr => <Counter onDelete ={this.handleDelete} key={ctr.id} value = {ctr.value} />)}
            </div>
          );
    }
}
 
export default Counters;