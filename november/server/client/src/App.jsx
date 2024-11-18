import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/add", {
        name: name,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Name</button>
      </form>
    </>
  );
}

export default App;
