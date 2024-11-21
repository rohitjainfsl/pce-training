import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  function handlePhotoChange(e) {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("ph", photo);

    const response = await axios.post(
      "http://localhost:5000/upload",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
  }

  return (
    <>
      <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input type="file" name="ph" onChange={handlePhotoChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
