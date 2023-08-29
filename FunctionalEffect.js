import React, {useState, useEffect} from 'react'

export default function FunctionalEffect() {
    const[count,setCount]=useState(1)

    useEffect(()=>{
        document.title=`Updated Value: ${count}`
    })

    const handleonclickValue=()=>{
        setCount(count*2)
    }

  return (
    <div>
        <h2>Value: {count}</h2>
        <button onClick={handleonclickValue}>Double me</button>      
    </div>
  )
}
