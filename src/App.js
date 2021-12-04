import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';
import { CartProvider } from './context/CartContext';
import './estilo.css'

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
