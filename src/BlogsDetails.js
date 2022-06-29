import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { cars, loading, error } = useFetch(`http://localhost:8000/cars/${id}`);
  return (
    <div className="blog-details">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cars && (
        <article>
          <h1>Blog Details - {id} </h1>
          <h1>{cars.Name}</h1>
          <p>{cars.Origin}</p>
          <p>Year: {cars.Year}</p>
          <p>Year: {cars.Description}</p>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
