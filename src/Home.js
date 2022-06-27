import HomeHero from "./HomeHero";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Mekna007");
  const [age, setAge] = useState(20);
  const title = "Welcome to my first React blog!";
  const hobbies = ["Basketball", "Reading", "Cars"];

  const handdleClick = () => {
    setName("Mekna007");
    setAge(21);
  };

  const [cars, setCars] = useState([
    {
      id : 1,
      carName: "BMW",
      type: "SUV",
      price: "$1,000,000",
      use: "Private",
    },
    {
      id : 2,
      carName: "Audi",
      type: "SUV",
      price: "$1,000,000",
      use: "Private",
    },
    {
      id : 3,
      carName: "Mercedes",
      type: "SUV",
      price: "$1,000,000",
      use: "Public",
    },
  ]);
  const handdleDelete = (id) => {
    const newCars = cars.filter((car) => car.id !== id);
    setCars(newCars);
  };
  return (
    <div className="content">
      <h1>{title}</h1>
      <button onClick={handdleClick} style={{ display: "none" }}>
        Click me
      </button>
      <p>
        {name} was my Best friend he was {age} years old. he liked to play{" "}
        {hobbies[0]} and {hobbies[1]}. he also loved {hobbies[2]} i made this
        blog for him using React. <br />
        <b>May he rest in peace ❤️</b>
      </p>
      <HomeHero
        cars={cars}
        subtitle="Best cars for you!"
        handdleDelete={handdleDelete}
      />
      <HomeHero
        cars={cars.filter((car) => car.use === "Private")}
        subtitle="Best Private cars"
        handdleDelete={handdleDelete}
      />
    </div>
  );
};

export default Home;
