import { useState, useEffect } from "react";
import HomeHero from "./HomeHero";
const Home = () => {
  // const [name, setName] = useState("Mekna007");
  // const [age, setAge] = useState(20);
  const title = "Welcome to my first React blog!";
  const subtitle = "~ Best cars in for you! ";

  // const handdleClick = () => {
  //   setName("Mekna007");
  //   setAge(21);
  // };

  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(
    () => {
      setTimeout(() => {
        fetch("http://localhost:8000/cars")
          .then((res) => {
            if (!res.ok) {
              throw Error("Something went wrong");
            }
            return res.json();
          })
          .then((data) => {
            setCars(data);
            setLoading(false);
            setError(null);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
            setCars(null);
          });
      }, 1000);
    },
    [
      /*name*/
    ]
  ); // the name is dependancy when it changes it will run the use effect

  return (
    <div className="content">
      {error && <h1>{error.message}</h1>}
      {loading && <h1>loading..</h1>}

      {cars && (
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <HomeHero cars={cars} />
        </div>
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
