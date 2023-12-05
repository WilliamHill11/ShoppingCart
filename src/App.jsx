import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/NavBar/Pages/Home';
import Products from './Components/NavBar/Pages/Products';
import ProductItem from './Components/NavBar/Pages/ProductItem';
import About from './Components/NavBar/Pages/About';
import ErrorPage from './Components/NavBar/Pages/ErrorPage';
import { CartProvider } from './Components/NavBar/Pages/CartContext';
import style from './Components/Styles/Cart.module.css';

function App() {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(style.overlay)) {
      setShowPopUp(false);
    }
  };

  return (
    <Router>
      <CartProvider>
        <NavBar
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
          handleOverlayClick={handleOverlayClick}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={
              <ProductItem
                showPopUp={showPopUp}
                setShowPopUp={setShowPopUp}
                handleOverlayClick={handleOverlayClick}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
