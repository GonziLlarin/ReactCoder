import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)
    const navigate = useNavigate()
    

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        } 
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }
    

    return(
        <div>          
            <div>
                <button  style={{width:70, backgroundColor:'red'}}onClick={decrement}>
                    -
                </button>
                <h4>
                    {quantity}
                </h4>
                <button style={{width:70}}onClick={increment}>
                    +
                </button>
            </div>
            <div>
                <button style={{width:270, backgroundColor:'black'}} onClick={() => {onAdd(quantity); navigate('/')}}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount