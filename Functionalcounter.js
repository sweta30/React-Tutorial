import React,{useState} from 'react'

export default function Functionalcounter() {

    let startvalue=1;

    const[count,setCount]=useState(startvalue);

    const handleIncrementValue=() =>{
        setCount(count+1)
    }

    const handleDecrementValue=() =>{
        setCount(count-1)
    }

    const handleResetValue=() =>{
        setCount(startvalue)
    }

    const handleIncrementValueby10=()=>{
        for(let i=0;i<10;i++){
            setCount(prevCount => prevCount+1)
        }
    }
  return (
    <div>
        <h2>Value : {count}</h2>
        <button onClick={handleIncrementValue}>Increment me</button>
        <button onClick={handleIncrementValueby10}>Increment me by 10</button>
        <button onClick={handleDecrementValue}>Decrement me</button>
        <button onClick={handleResetValue}>Reset me</button>
    </div>
  )
}
