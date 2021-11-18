import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './estilo.css'
import ItemList from './components/ItemList';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  saludo="Próximamente"/>
      
    </div>
  );
}

export default App;
