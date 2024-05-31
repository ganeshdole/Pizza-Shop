import BgPizza from "../assets/bg-pizza.jpg";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={BgPizza} alt="Pizza Slice" className="justify-center" />
      <h1 className="text-2xl md:text-4xl lg:text-5xl ">
        Discover the tastiest pizza selection around
      </h1>
    </div>
  );
};

export default Home;
