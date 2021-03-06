import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    

    render() { 
        console.log("conters called");
        return (
            <div>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button> <br/>
                {this.props.arr.map(ctr => <Counter 
                key={ctr.id} 
                onDelete ={this.props.onDelete} 
                onIncrement ={this.props.onIncrement}
                counter={ctr}/>)}
            </div>
          );
    }
}
 
export default Counters;