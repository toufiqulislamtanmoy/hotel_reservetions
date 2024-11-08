import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen bg-primary">
      <h1 className="text-4xl font-bold text-center">Hotel Reservation</h1>
      <Link to="/hotel-payment">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Go to Hotel Payment
        </button>
      </Link>
    </div>
  );
};

export default Home;
