import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  function handlePhotoChange(e) {
    setImage(e.target.files[0]);
  }
  async function handleSubmit(e) {
    e.preventDefault(); //to prevent page from reloading

    const frm = new FormData();
    frm.append("n", name);
    frm.append("i", image);

    const response = await axios.post("http://localhost:5000/upload", frm);
    if (response.status === 200) {
      console.log(response.data.imageUrl);
      setUploadedImage(response.data.imageUrl);
    }
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input type="file" name="photo" onChange={handlePhotoChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      {uploadedImage && <img src={uploadedImage} />}
    </>
  );
}
export default App;
