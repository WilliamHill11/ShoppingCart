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

  useEffect(() => {
    const handleClosePopUp = () => {
      setShowPopUp(false);
    };

    const handleOutsideClick = (event) => {
      // Check if the click target is not within the popup
      const popup = document.querySelector(`.${style.popup}`);
      const isClickOutsidePopup = popup && !popup.contains(event.target);

      if (showPopUp && isClickOutsidePopup) {
        handleClosePopUp();
      }
    };

    const handlePopupClick = (event) => {
      // Stop propagation to prevent closing when clicking inside the popup
      event.stopPropagation();
    };

    // Attach the event listeners
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
      const popup = document.querySelector(`.${style.popup}`);
      if (popup) {
        popup.addEventListener('click', handlePopupClick);
      }
    }, 100);

    // Clean up the event listeners on component unmount
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleOutsideClick);
      const popup = document.querySelector(`.${style.popup}`);
      if (popup) {
        popup.removeEventListener('click', handlePopupClick);
      }
    };
  }, [showPopUp]);

  return (
    <Router>
      <CartProvider>
        <NavBar showPopUp={showPopUp} setShowPopUp={setShowPopUp} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductItem showPopUp={showPopUp} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
