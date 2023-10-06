import React, { useState } from 'react'
export default function Counter(){
    const [num,setNum]=useState(0);
    
    function Inc(){
        setNum(num+1)
      
        
    }
    function Dec(){
        setNum(num-1)
    }
    return(
        <>
        <div>{num}</div>
        <button onClick={Inc}>increase</button>
        <button onClick={Dec}>decrease</button>
        </>
    )

}