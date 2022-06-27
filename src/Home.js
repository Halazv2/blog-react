import { useState, useEffect } from "react";
import HomeHero from "./HomeHero";
const Home = () => {
  const [name, setName] = useState("Mekna007");
  const [age, setAge] = useState(20);
  const title = "Welcome to my first React blog!";
  const hobbies = ["Basketball", "Reading", "Cars"];

  const handdleClick = () => {
    setName("Mekna007");
    setAge(21);
  };

  const [cars, setCars] = useState([]);
  useEffect(() => {
    // console.log("use effect ran");
    // console.log(name);
    fetch("http://localhost:8000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCars(data);
      });
  }, []); // the name is dependancy when it changes it will run the use effect

  return (
    <div className="content">
      <h1>{title}</h1>
      <button onClick={handdleClick} style={{ display: "none" }}>
        Click me
      </button>
      <button onClick={() => setName("Hafid")} style={{ display: "none" }}>
        Click me
      </button>
      <p>
        {name} was my Best friend he was {age} years old. he liked to play{" "}
        {hobbies[0]} and {hobbies[1]}. he also loved {hobbies[2]} i made this
        blog for him using React. <br />
        <b>May he rest in peace ❤️</b>
      </p>
      {cars && (
        <HomeHero
          cars={cars}
          subtitle="Best cars for you!"
        />
      )}
      {/* <HomeHero
        cars={cars.filter((car) => car.use === "Private")}
        subtitle="Best Private cars"
        handdleDelete={handdleDelete}
      /> */}
    </div>
  );
};

export default Home;
