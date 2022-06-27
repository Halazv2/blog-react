const HomeHero = (/*props*/ { cars, subtitle,handdleDelete }) => {
  //   const cars = props.cars;
  //   const subtitle = props.subtitle;
  return (
    <div className="homeHero">
      <h2>{subtitle}</h2>
      {cars.map((car, id) => {
        return (
          <div className="blog-preview" key={id}>
            <h1>{car.carName}</h1>
            <p>{car.type}</p>
            <p>Price: {car.price}</p>
            <p>Price: {car.id}</p>
            <button onClick={()=>handdleDelete(car.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HomeHero;
