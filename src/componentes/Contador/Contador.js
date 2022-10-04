import { useState } from 'react'

const Contador = ()=>{
    const [count , setCount] = useState(1)

    // let count = 0
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if(count > 1){ 
            setCount(count - 1)
        }
    }
    return (
        <div>
            <h1>Cantidad: </h1>
            <h2>{count}</h2>
            <button style={{ backgroundColor:'red', scale:'0.5', margin:'0',}} onClick={decrement}>-</button>
            <button style={{ scale:'0.5' , margin:'0',}} onClick={increment}>+</button>
        </div>
    )
}

export default Contador