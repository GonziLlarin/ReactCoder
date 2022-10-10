import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({ products, setPage }) => {
    return (
        <div className="ItemList">
            { products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price} setPage={setPage} />)}
        </div>
    )
}
export default ItemList