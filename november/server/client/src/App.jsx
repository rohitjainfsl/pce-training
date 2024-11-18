import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault(); //to prevent page reload
    try {
      const response = await axios.post("http://localhost:3000/add", {
        name: name,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
