import { useEffect, useState } from "react";
import { getAllPizzas } from "@/services/pizza";
import BgPizza from "../assets/bg-pizza.jpg";
import ProductCard from "@/components/PizzaCard";

const Home: React.FC = () => {
  const [items, setItems] = useState([]);
  async function loadAllPizza() {
    const result = await getAllPizzas();
    console.log(items);
    setItems(result);
  }

  useEffect(() => {
    loadAllPizza();
  }, [items.length]);

  function pizzaCart() {
    if (items) {
      return items.map((item) => {
        return (
          <ProductCard
            key={item.name}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        );
      });
    } else {
      return (
        <div className="flex justify-center items-center">Loading ...</div>
      );
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <img src={BgPizza} alt="Pizza Slice" className="justify-center" />
        <h1 className="text-2xl md:text-4xl  font-bold  font-mono uppercase text-center">
          Discover the tastiest pizza selection around
        </h1>
      </div>
      <div className="flex flex-col md:grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 p-10 justify-center items-center">
        {pizzaCart()}
      </div>
    </div>
  );
};

export default Home;
