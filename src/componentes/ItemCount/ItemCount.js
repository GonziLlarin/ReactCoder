import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

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
        <div className='Counter'>          
            <div className='Controls'>
                <button className="Button" style={{width:70, backgroundColor:'red'}}onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="Button" style={{width:70}}onClick={increment}>+</button>
            </div>
            <div>
                <button className="Button" style={{width:270, backgroundColor:'black'}}onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
)

}
export default ItemCount