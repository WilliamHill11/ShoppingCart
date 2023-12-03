import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/NavBar/Pages/Home';
import Products from './Components/NavBar/Pages/Products';
import ProductItem from './Components/NavBar/Pages/ProductItem';
import About from './Components/NavBar/Pages/About';
import ErrorPage from './Components/NavBar/Pages/ErrorPage';
import { CartProvider } from './Components/NavBar/Pages/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductItem />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
