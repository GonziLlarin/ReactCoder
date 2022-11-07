import './CheckOut.css'
import { useContext , useState } from 'react'
import { CartContext} from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { NotificationContext } from '../../notification/NotificationService'
import { useNavigate } from  "react-router-dom"
import Form from '../Form/Form'

const CheckOut = ()=> {
    const { cart,total, clearCart } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const [ loading, setLoading ]= useState(false) 
    const [personalData, setPersonalData] = useState(false)

    const navigate = useNavigate()

    const [datosComprador, setDatosComprador] = useState({}) 

    const completarDatos = (name, surname, address, phone, email) =>{
        setDatosComprador({name, surname, address, phone, email})
        setPersonalData(true)
    }
    
    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: datosComprador,
                items: cart,
                total: total
        }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db,'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            docs.forEach( doc => {

                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)

                const prodQuantity = productsAddedToCart?.quantity
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(()=> {
                    navigate('/')
                }, 3000)

                setNotification('success',`El número de su orden es : ${orderAdded.id}`)
            } else {
                setNotification('error','Hay productos que no tienen stock')
            }
        } catch(error) {
            setNotification('error','Ha sucedido un error')
        } finally{
            setLoading(false)
        }
}

if(loading) {
    return <h1> Se esta generando su orden</h1>
}
    return (
        <div className='CheckOut'>
            <h1>Completa los datos para generar la orden</h1>
            <Form completoDatos={completarDatos} />
            { personalData ? <button style={{backgroundColor:'black'}}onClick={createOrder}> Generar Orden</button>:""}
            {/* <form>
                <label>
                    Nombre y Apellido:
                    <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder="Nombre y Apellido"> Nombre y Apellido</input>
                </label>
                <label>
                    Número de teléfono:
                    <input type='number' value={number} onChange={(e)=> setNumber(e.target.value)} placeholder="Número de teléfono"> Teléfono</input>
                </label>
                <label>
                    Correo electrónico:
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"> Correo electrónico</input>
                </label>
            </form> */}
            {/* <button onClick={createOrder}>Generar Orden</button> */}
        </div>
    )
}

export default CheckOut



//         <h1>COMPLETÁ TUS DATOS</h1>
//         <ClientForm DataCompleted={DataCompleted}/>
//             { personalData?<button className="comprarBtn" type="submit" onClick={getOrder}>CONFIRMAR COMPRA</button>
//         : ""}