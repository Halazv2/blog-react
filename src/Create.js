import { useState } from "react";
const Create = () => {
  const [Name, setName] = useState("");
  const [Origin, setOrigin] = useState("");
  const [Year, setYear] = useState("");
  const [Description, setDescription] = useState("");
  const [isPanding, setPanding] = useState(false);
  const empty = () => {
    setName("");
    setOrigin("");
    setYear("");
    setDescription("");
  };
  const handeleSubmit = (e) => {
    e.preventDefault();
    setPanding(true);
    const newCar = { Name, Origin, Year, Description };
    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    }).then(() => {
      setTimeout(() => {
        setPanding(false);
      }, 1000);
      empty();
    });
  };
  return (
    <div className="create">
      <h3>Create new blog</h3>
      <form onSubmit={handeleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Origin:</label>
        <input
          type="text"
          name="Origin"
          value={Origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <label>Year:</label>
        <input
          type="date"
          name="Year"
          value={Year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        >
          {" "}
        </textarea>
        {!isPanding && <button type="submit">Create</button>}
        {isPanding && <button type="submit">Adding blog..</button>}
      </form>
    </div>
  );
};

export default Create;
