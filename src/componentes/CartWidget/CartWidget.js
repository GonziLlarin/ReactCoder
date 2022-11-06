import carrito from './assets/carrito.png'
import './carrito.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = ()=>{

    const { totalQuantity } = useContext(CartContext)

    return  (
        
        <Link to='cart' >
            <div className='carrito'>
                <img src={carrito} alt="carrito"/>
                {totalQuantity}
            </div>
        </Link>
    )
}


export default CartWidget