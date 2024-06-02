import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Layout: React.FC = () => {
  useEffect(() => {
    console.log("layout comp");
  });
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <footer>
        <hr />
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
