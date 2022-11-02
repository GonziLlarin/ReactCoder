import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import { getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

const ItemDetailContainer = ()=>{
    const [product, setProduct ] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(()=> {
        getProductById(productId).then(response =>{
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    },[productId])

if(loading) {
    return  <p>Cargando producto...</p>
}

    return(
        <div className="ItemDetailContainer">
            <h1> Detalle Del Producto </h1>
            <ItemDetail {...product} />
            <Link to='/'><p>Volver</p></Link>
        </div>
    )
}    
export default ItemDetailContainer