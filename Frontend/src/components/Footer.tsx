import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

function Footer() {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 pt-16">
        <div className="text-primaryText">
          <h3 className="text-2xl font-bold uppercase">HUNGRY CRUST</h3>
          <ul className="flex flex-col gap-4 mt-7">
            <li>
              <Link
                to={"about"}
                className="tracking-wide hover:font-bold cursor-pointer duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={"vans"}
                className="tracking-wide hover:font-semibold cursor-pointer duration-300"
              >
                Book Table
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-[600px]">
          <p className="py-4">
            We offer high-quality pizzas for dine-in or takeaway in various
            locations throughout North America, Oceania, and Europe, served
            through a user-friendly and tailor-made online platform.
          </p>
          <h3 className="text-primaryText text-2xl font-bold">
            Subscribe to our newsletter
          </h3>
          <p className="pt-4">
            Stay informed by subscribing to receive periodic notifications about
            the latest pizza promotions, exclusive deals, and delicious updates!
          </p>
          <form className="flex flex-col gap-2 py-5">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                type="email"
                id="email"
                placeholder="E-mail"
                aria-required
                required
              />
              <Button
                variant={"outline"}
                className="w-full md:w-[250px] bg-black text-accent uppercase font-bold tracking-widest"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
