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

    //  constructor()
    //  {
    //      super();
    //      this.Cid = this.Cid.bind(this);
    //  }
    

    handleReset = () =>
    {
        const arr = this.state.arr.map( c => {
            c.value =0;
            return c;
        } );
        this.setState({arr});
    };

    handleIncrement = counter =>
    {
        const arr = [...this.state.arr];
        const index = arr.indexOf(counter);
        arr[index] = {...counter};
        arr[index].value++;
        this.setState({arr});
    };


     handleDelete = Cid =>
     {
        const arr = this.state.arr.filter(counting => counting.id !== Cid)
        this.setState({arr});
     };

    render() { 
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button> <br/>
                {this.state.arr.map(ctr => <Counter 
                key={ctr.id} 
                onDelete ={this.handleDelete} 
                onIncrement ={this.handleIncrement}
                counter={ctr}/>)}
            </div>
          );
    }
}
 
export default Counters;