import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';
import { CartProvider } from './context/CartContext';
import './estilo.css'

const App = () => {
  return (
    <div className="div-img-datos">
      <CartProvider>
        <Router />    
      </CartProvider>       
    </div>
  );
}

export default App;
