import React, { Component } from 'react'
import LifeCycleForY from './LifeCycleForY';

export default class LifeCycleForX extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      }
      console.log('Component X lifecycle constructor called');
    }

    static getDerivedStateFromProps(props,state){
        console.log('Component X lifecycle getDerivedStateFromProps called');
        return null;
    }

    componentDidMount(){
        console.log('Component X lifecycle componentDidMount called');
        return true;
    }

    shouldComponentUpdate(){
        console.log('Component X lifecycle shouldComponentUpdate called');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('Component X lifecycle getSnapshotBeforeUpdate called');
        return null;
    }
    
    componentDidUpdate(){
        console.log('Component X lifecycle componentDidUpdate called');
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
        Component X lifecycle render called
        <LifeCycleForY/>
        <h2>Value: {this.state.count}</h2>
        <button onClick={this.handlechangeState}>Change State</button>
      </div>
    )
  }
}
