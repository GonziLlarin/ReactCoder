import carrito from './assets/carrito.png'
import './carrito.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = ()=>{

    const { totalQuantity } = useContext(CartContext)
    return  (
        <div className='carrito'>
            <img src={carrito} alt="carrito"/>
            {totalQuantity}
        </div>
    )
}


export default CartWidget