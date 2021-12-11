import Router from './router/Router';
import { CartProvider } from './context/CartContext';
import './estilo.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router />    
      </CartProvider>  
    </div>
  );
}

export default App;
