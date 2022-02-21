import './App.css';
import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      counters: 0
	    };
	  }
  increaseCounter = () =>{
    let addCounter = this.state.counters +1;
    this.setState({counters: addCounter});
  }
  decreaseCounter = () =>{
    let minusCounter = this.state.counters -1;
    this.setState({ counters: minusCounter});
  }
  render() {
    return (
      <div className="App">
        <Header addCounter ={this.increaseCounter} minusCounter={this.decreaseCounter}/>
	      <div>
           <CounterList counter={this.state.counters}/>
        </div>
      </div>
    );
  }
}
export default App;