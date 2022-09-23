import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'
const NavBar = () => {
    return (
        <nav>
            <div className='marca'>
                <h1>Depilación Definitiva San Miguel</h1>
                <img src={logo} alt="logo" className='logo'/>
            </div>
            <div className='productos'>
                <button>Lista de precios</button>
                <button>Combos</button>
            </div>
            <CartWidget className='carrito'/>
        </nav>
    )
}

export default NavBar