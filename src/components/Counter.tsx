import { useState } from "react"

export default function Counter() {
    const [count,setCount]=useState(0);
  return (
    <p onClick={()=>{
        setCount(count+1)
    }}>
        <b>{count}</b> / 0 Todos Completed
    </p>
  )
}
