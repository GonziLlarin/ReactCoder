import { useState, createContext, useEffect, useContext } from "react"
import { NotificationContext } from "../notification/NotificationService"

export const CartContext = createContext()

export const CartProvider = ({children})=>{

    const [cart , setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const { setNotification } = useContext(NotificationContext)

    console.log(cart)
    useEffect( () => {
        const totalCarrito = getQuantity()
        setTotalQuantity(totalCarrito)
    }, [cart]) 

    const addItem = (productToAdd, quantity, name) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
            setNotification('success', `Se agrego correctamente ${productToAdd.quantity} depilación de ${productToAdd.name}`) 
    } else {
        setNotification('error', 'Ese producto ya esta agregado')
        }
    }
    
    const isInCart = (id) =>{
        return cart.some( prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })
        return accu
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}