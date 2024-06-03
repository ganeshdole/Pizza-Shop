import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState("");
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  function onClickLogOut() {
    sessionStorage.removeItem("token");
    setToken(null);
  }

  function getToken() {
    setToken(sessionStorage.getItem("token"));
  }

  useEffect(() => {
    console.log("navbar");
    getToken();
  }, [token]);

  return (
    <div className="flex p-10 justify-center items-center">
      <NavLink to="/" className="text-2xl font-extrabold">
        <h1>HUNGRY CRUST</h1>
      </NavLink>
      <nav className="ml-auto">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/cart"
              className="border-2 p-2 rounded-lg cursor-pointer"
            >
              Cart({cart.items.length})
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/signup"
                className="border-2 p-2 rounded-lg cursor-pointer"
              >
                Sign Up
              </NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink
                to="/signin"
                className="border-2 p-2 rounded-lg cursor-pointer"
              >
                Sign In
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink
                to="/orders"
                className="border-2 p-2 rounded-lg cursor-pointer"
              >
                Orders
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <NavLink
                to="/signin"
                className="border-2 p-2 rounded-lg cursor-pointer"
              >
                <button
                  onClick={() => {
                    onClickLogOut();
                  }}
                >
                  Log Out
                </button>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
