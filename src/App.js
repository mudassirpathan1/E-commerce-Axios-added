import "./App.css";
import Header from "./components/Header";
import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import AlbumList from "./components/AlbumList";
import About from "./pages/about";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import AuthContext from "./store/auth-context";

const productsArr = [
  {
    id: "a1",
    title: "Round Neck T-Shirts",
    price: 1299,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "a2",
    title: "Printed T-Shirts",
    price: 1599,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "a3",
    title: "Solid Color T-Shirts",
    price: 999,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "a4",
    title: "Half Sleve T-shirts",
    price: 299,
    quantity: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function App() {
  const [cart, setCart] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  
  const productList = productsArr.map((product) => {
    return (
      <AlbumList
        id={product.id}
        title={product.title}
        image={product.imageUrl}
        price={product.price}
        quantity={product.quantity}
      />
    );
  });

  const openCartHandler = () => {
    setCart(true);
  };

  const closeCartHandller = () => {
    setCart(false);
  };

  const submitUserDetails = async (details) => {
    const response = await fetch(
      "https://react-http-44f2c-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Context-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <CartProvider>
      
      <Header onShow={openCartHandler} />
      
      <main>
        <Switch>
          <Route path="/store" exact>
            {isLoggedIn && (
              <>
              {cart && <Cart onClose={closeCartHandller} />}
                <div className="title">
                  <h1>The Generics</h1>
                </div>
                <h1 className="category">Music</h1>
                <main>{productList}</main>
              </>
            )}
            {!isLoggedIn && <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <ContactUs getUserDetails={submitUserDetails} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/store/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
      
    </CartProvider>
  );
}

export default App;