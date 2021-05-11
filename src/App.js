import react, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    arr : [
        { id:1, value:0 },
        { id:2, value:0 },
        { id:3, value:5 },
        { id:4, value:0 },
    ]
 }

   

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
  render()
  {
  return (
    <react.Fragment>
      <NavBar totalCount = {this.state.arr.filter(obj => obj.value>0).length}/>
      <main className="containers">
        <Counters
        arr = {this.state.arr} 
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}/>
      </main>    
    </react.Fragment>
  );
  }
}

export default App;
