import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer  saludo="Proximamente"/>
      
    </div>
  );
}

export default App;
