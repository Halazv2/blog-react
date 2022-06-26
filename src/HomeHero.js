import { useState } from "react";
const HomeHero = () => {
    const [cars, setCars] = useState([
        {
            carName: "BMW", type: "SUV", price: "$1,000,000",
        },
        {
            carName: "Audi", type: "SUV", price: "$1,000,000",
        },
        {
            carName: "Mercedes", type: "SUV", price: "$1,000,000",
        }
    ]);
    return ( 
        <div className="homeHero">
            {
                cars.map((car, index) => {
                    return (
                        <div className="blog-preview" key={index}>
                            <h1>{car.carName}</h1>
                            <p>{car.type}</p>
                            <p>Price: {car.price}</p>
                        </div>
                    );
                }
                )
            }
        </div>
     );
}
 
export default HomeHero;