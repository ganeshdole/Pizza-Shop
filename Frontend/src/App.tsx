import Layout from "./Layout/Layout";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/signup";

import "react-toastify/dist/ReactToastify.css";
import Signin from "./pages/signin";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
