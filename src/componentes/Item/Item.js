import './Item.css'
// import Contador from '../Contador/Contador'

const Item =( { img, name, category, price }) => {

    return (
        <div className="Card">            
            <img src={img} alt={name} />
            <h1> {name} </h1>
            <h2> {category} </h2>
            <p> ${price} </p>
            {/* <Contador className="ContadorItem" /> */}
        </div>
    )
}

export default Item