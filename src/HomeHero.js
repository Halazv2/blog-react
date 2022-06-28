import { Link } from "react-router-dom";

const HomeHero = (/*props*/ { cars }) => {
  //   const cars = props.cars;
  //   const subtitle = props.subtitle;
  return (
    <div className="homeHero">
      {cars.map((car, id) => {
        return (
          <div className="blog-preview" key={id}>
            <Link to={`/blogs/${car.id}`}>
              <h1>{car.Name}</h1>
              <p>{car.Origin}</p>
              <p>Year: {car.Year}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomeHero;
