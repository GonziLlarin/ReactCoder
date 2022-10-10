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
    console.log(productId)

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
    // return (
    //     <div>
    //         <h1>Listado</h1>
    //         {getProductsById.map((prod)=>{
    //             return (
    //                 <div key={prod.id}>
    //                     <img src={prod.img} alt={prod.name} style={{ width: 100}}/>
    //                     <h3>{prod.name}</h3>
    //                     <p>Price: ${prod.price}</p>
    //                     <Link to={`/detail/${prod.id}`}>Ver detalle</Link>
    //                 </div>
    //             )
    //         })}
    //     </div>
    
    )
}


export default ItemDetailContainer