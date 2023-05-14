import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function Home() {
  const allCoffee = useLoaderData();
  console.log(allCoffee);

  return (
    <div className="mx-60 mt-12 text-center">
      <h1 className="text-4xl text-bold">Our Popular Products</h1>
      <Link to="/add-coffee">
        <button className="mt-6 py-3 px-5 cursor-pointer text-bold text-base bg-[#D2B48C] rounded-lg border-[#331A15] border-2">
          Add Coffee
        </button>
      </Link>
      <div className="grid grid-cols-2 gap-6 mt-12">
        {allCoffee.map((singleCoffee) => (
          <CoffeeCard key={singleCoffee._id} coffee={singleCoffee} />
        ))}
      </div>
    </div>
  );
}

export default Home;
