import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const ButtonList = ()=>{
    return (
        <div className='BotonesProd'> 
            <Link to='/category/producto'><Button>Productos</Button> </Link>
            <Link to='/category/promo'><Button style={{backgroundColor: 'black'}}>Promos</Button> </Link>
        </div> 
    )
}

export default ButtonList


