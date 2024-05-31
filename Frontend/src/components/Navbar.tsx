import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex p-10 justify-center items-center">
      <NavLink to="/" className="text-2xl font-extrabold">
        <h1>HUNGRY CRUST</h1>
      </NavLink>
      <nav className="ml-auto">
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/signup"
              className="border-2 p-2 rounded-lg cursor-pointer"
            >
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className="border-2 p-2 rounded-lg cursor-pointer"
            >
              Sign In
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
