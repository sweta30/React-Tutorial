import React, { Component } from 'react'

export default class LifeCycleForY extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      }
      console.log('Component Y lifecycle constructor called');
    }

    static getDerivedStateFromProps(props,state){
        console.log('Component Y lifecycle getDerivedStateFromProps called');
        return null;
    }

    componentDidMount(){
        console.log('Component Y lifecycle componentDidMount called');
        return true;
    }

    shouldComponentUpdate(){
        console.log('Component Y lifecycle shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('Component Y lifecycle getSnapshotBeforeUpdate called');
        return null;
    }
    
    componentDidUpdate(){
        console.log('Component Y lifecycle componentDidUpdate called');
        return true;
    }

    handlechangeState=()=>{
        this.setState({
            count: 1000
        })
    }

  render() {
    return (
      <div>
        Component Y lifecycle render called
        <h2>Value: {this.state.count}</h2>
        <button onClick={this.handlechangeState}>Change State</button>
      </div>
    )
  }
}
