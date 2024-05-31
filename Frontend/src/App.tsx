import Layout from "./Layout/Layout";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Signup from "./pages/signup";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
