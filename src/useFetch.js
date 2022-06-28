import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [cars, setCars] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
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
          if (err.name === "AbortError") {
            console.log("Fetching aborted"); 
          } else {
            setError(err.message);
            setLoading(false);
          }
        });
    }, 1000);
    return () => abortController.abort();
  }, [url]);
  return { cars, loading, error };
};
export default useFetch;
