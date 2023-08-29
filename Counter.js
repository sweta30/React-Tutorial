import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            countvalue: 1
        }
    }

    componentDidMount(){
      document.title=`Updated Value: ${this.state.countvalue}`;
      console.log('componentDidMount got executed');
    }

    componentDidUpdate(){
      document.title=`Updated Value: ${this.state.countvalue}`;
      console.log('componentDidUpdate got executed');
    }
    
    handlevalue= () => {
        this.setState({
            countvalue: this.state.countvalue * 2
        })
    }
  render() {
    return (
      <div>
        <h2>Value : {this.state.countvalue}</h2>
        <button onClick={this.handlevalue}>Double me</button>
      </div>
    )
  }
}
