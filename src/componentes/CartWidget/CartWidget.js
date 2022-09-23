import carrito from './assets/carrito.png'
import './carrito.css'

const CartWidget = ()=>{
    return  (
        <div className='carrito'>
            <img src={carrito} alt="carrito"/>
            10
        </div>
    )
}


export default CartWidget