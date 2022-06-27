const HomeHero = (/*props*/ { cars, subtitle }) => {
  //   const cars = props.cars;
  //   const subtitle = props.subtitle;
  return (
    <div className="homeHero">
      <h2>{subtitle}</h2>
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
