import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/'>
                <div className='marca'>
                    <h1>Depilación Definitiva San Miguel</h1>
                    <img src={logo} alt="logo" className='logo'/>
                </div>
            </Link>
            <CartWidget className='carrito'/>            
        </nav>
    )
}

export default NavBar