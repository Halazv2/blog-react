import { useState, useEffect } from "react";
const useFetch = (url)=>{
    const [cars, setCars] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(
      () => {
        setTimeout(() => {
          fetch(url)
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
        url
      ]
    ); // the name is dependancy when it changes it will run the use effect
    return {cars, loading, error};
}
export default useFetch;