import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { cars, loading, error } = useFetch(`http://localhost:8000/cars/${id}`);
  const history = useHistory();
  const handleDelete = () => {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cars && (
        <article>
          <h1>Blog Details - {id} </h1>
          <h1>{cars.Name}</h1>

          <p>
            <b>{cars.Origin}</b>
          </p>
          <br />
          <p>
            <b>Year:</b> {cars.Year}
          </p>
          <br />
          <p>
            <b>About the car:</b> <br />
            {cars.Description}
          </p>
          <br />
          <br />
         <center><button onClick={handleDelete}>Delete</button></center> 
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
