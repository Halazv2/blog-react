const HomeHero = (/*props*/ { cars }) => {
  //   const cars = props.cars;
  //   const subtitle = props.subtitle;
  return (
    <div className="homeHero">
      {cars.map((car, id) => {
        return (
          <div className="blog-preview" key={id}>
            <h1>{car.Name}</h1>
            <p>{car.Origin}</p>
            <p>Year: {car.Year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomeHero;
