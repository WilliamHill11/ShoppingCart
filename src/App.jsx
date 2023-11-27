import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/NavBar/Pages/Home';
import Products from './Components/NavBar/Pages/Products';
import ProductItem from './Components/NavBar/Pages/ProductItem';
import About from './Components/NavBar/Pages/About';
import Cart from './Components/NavBar/Pages/Cart';
import ErrorPage from './Components/NavBar/Pages/ErrorPage';

function App() {
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       title: 'test product',
  //       price: 13.5,
  //       description: 'lorem ipsum set',
  //       image: 'https://i.pravatar.cc',
  //       category: 'electronic',
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
