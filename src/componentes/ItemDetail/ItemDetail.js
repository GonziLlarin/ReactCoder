import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, description, price, stock}) => {
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        addItem( productToAdd )
    }

    return (
        <article className="ItemDetail">
            <header>
                <h2>
                    {name}
                </h2>
            </header>  
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>
        </article>
    )
}

export default ItemDetail