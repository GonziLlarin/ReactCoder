import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'



const Cart = (order) => {

    const { cart, removeItem, total, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    return(
        <div className='Cart'>
            <h1>Orden de compras</h1>
            {cart.map(prod => (
                <div className='productCart'>
                    {prod.name} : cantidad: {prod.quantity}
                    <button style={{ backgroundColor:'red', scale:'0.5', margin:'0',}} onClick={() => removeItem(prod.id)}>remover</button>
                </div>
                ))
            }
            <div>Precio total: ${total}</div>

            <button style={{ backgroundColor:'black', scale:'0.5', margin:'0',}} 
            onClick={() =>{
                clearCart();
                navigate('/');
            }
                }>
                Limpiar carrito
            </button>
            <button style={{width:'300px'}} onClick={()=> navigate('/checkout')}> Crear Orden de compra</button>
        </div>
    )
}

export default Cart