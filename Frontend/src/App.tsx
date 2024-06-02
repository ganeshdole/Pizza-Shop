import Layout from "./Layout/Layout";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/signup";

import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/signin";
import Cart from "./pages/cart";
import Orders from "./pages/orders";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
