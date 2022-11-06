import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NotificationContext }  from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, description, price, stock}) => {
    
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {id, name, price,quantity}
        
        addItem(productToAdd, quantity)
        setNotification('success',`Se agrego correctamente ${quantity} de ${name}`)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <article className="ItemDetail">
            <header>
                <h2>{name}</h2>
            </header>  
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p>Descripción: {description}</p>
                <p>Precio: {price}</p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded}/>
            </footer>
        </article>
    )
}

export default ItemDetail