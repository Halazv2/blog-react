import HomeHero from "./HomeHero";
import useFetch from "./useFetch";
const Home = () => {
  // const [name, setName] = useState("Mekna007");
  // const [age, setAge] = useState(20);
  const title = "Welcome to my first React blog!";
  const subtitle = "~ Best cars in for you! ";

  // const handdleClick = () => {
  //   setName("Mekna007");
  //   setAge(21);
  // };
  const url = "http://localhost:8000/cars";
  const { cars, loading, error } = useFetch(url);

  return (
    <div>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>loading..</h1>}

      {cars && (
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <HomeHero cars={cars} />
        </div>
      )}
    </div>
  );
};

export default Home;
