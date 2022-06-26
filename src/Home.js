import HomeHero from "./HomeHero";
import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("Mekna007");
  const [age, setAge] = useState(21);
  const title = "Welcome to my first React blog!";
  const hobbies = ["basketball", "reading", "cars"];

  const handdleClick = () => {
    setName("Mekna007");
    setAge(21);
  };
  return (
    <div className="content">
      <h1>{title}</h1>
      <button onClick={handdleClick} style={{display:"none"}}>Click me</button>
      <p>
        {name} is {age} years old and likes {hobbies[0]}, {hobbies[1]} and{" "}
        {hobbies[2]}
      </p>
        <HomeHero />
    </div>
  );
};

export default Home;
