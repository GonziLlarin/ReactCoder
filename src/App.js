import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Button from './componentes/Button/Button';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='BotonesProd'>
        <Button>
          Productos
        </Button>
        <Button style={{backgroundColor: 'black'}}>
          Promos
        </Button>
      </div>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;