import React, { useState } from 'react'
import '../App.css'


const FunctionCounter = ()=>{
    const [number, setnumber] = useState(0);

    function handleIncrease() {
        setnumber(number + 5);
    }

    function handleDecrease() {
        setnumber(0);
    }


    return(
        <>
        <h1 className= "display">{number} </h1>
        <div>
            <button onClick={()=> handleDecrease()} className='cont'>Reset to 0 </button>
            <button onClick={()=> handleIncrease()} className='cont'>Add 5 </button>

        </div>
        </>
    )
}
export default FunctionCounter;