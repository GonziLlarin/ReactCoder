import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Button from './componentes/Button/Button';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
// import Contador from './componentes/Contador/Contador';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Contador /> */}
      <BrowserRouter>
          <NavBar />
          <div className='BotonesProd'>
            <Button>
              Productos
            </Button>
            <Button style={{backgroundColor: 'black'}}>
              Promos
            </Button>
          </div>

          <Routes>
            <Route path='/' element={<ItemListContainer className="ItemListContainer" greeting={'Listado De Productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='*' element={<h1>Error 404</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
);
}

export default App;