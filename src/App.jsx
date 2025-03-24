import "./App.css";
import React, { useState, useEffect } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import UpdateProduct from "./components/Updateproduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/Context";


function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [theme, setTheme] = useState(true);
 
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };
  
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const toggleTheme = () => {
    setTheme((theme) ? false : true)
    console.log(theme)
  }


  return (
    <AppProvider>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar onSelectCategory={handleCategorySelect} toggleTheme={toggleTheme}/>
        <Routes className={theme ? "bg-light" : "bg-dark"}>
          <Route path="/" element={ <Home addToCart={addToCart} selectedCategory={selectedCategory} theme={theme} />} />
          <Route path="/add_product" element={ <AddProduct theme={theme}/>} />
          <Route path="/product" element={<Product  theme={theme}/>} />
          <Route path="product/:id" element={<Product theme={theme} />} />
          <Route path="/product/update/:id" element={<UpdateProduct theme={theme}/>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
