import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import ButtonList from './componentes/ButtonList/ButtonList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider} from './notification/NotificationService'
import Cart from './componentes/Cart/Cart';

function App() {

  return ( 
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter> 
              <NavBar />
              <ButtonList />
              <Routes>
                <Route path='/' element={<ItemListContainer className="ItemListContainer" greeting={'Listado De Productos'}/>}/> 
                <Route path='/category/:categoryId' element={<ItemListContainer />}/> 
                <Route path='/detail/:productId' element={ <ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='*' element={<h1>Error 404</h1>}/> 
              </Routes> 
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider> 
    </div> 
); 
}

export default App; 