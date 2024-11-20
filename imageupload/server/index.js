import { v2 as cloudinary } from "cloudinary";
import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const PORT = 5000;
cloudinary.config({
  cloud_name: "ddadanczt",
  api_key: "961497967514558",
  api_secret: "JKzE2spt6Kr81v5pBNHL9c7iEjo", // Click 'View API Keys' above to copy your API secret
});
//MIDDLEWARE - MULTER which can hijack network requests & responses

const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log("Server started"));

app.post("/upload", upload.single("i"), async (req, res) => {
  const name = req.body.n;

  const result = await new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "pce" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    uploadStream.end(req.file.buffer);
  });
  res.json({ imageUrl: result.secure_url });
});

// (async function () {
//   // Configuration

//   // Upload an image
//   const uploadResult = await cloudinary.uploader
//     .upload(
//       "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//       {
//         public_id: "shoes",
//       }
//     )
//     .catch((error) => {
//       console.log(error);
//     });

//   console.log(uploadResult);

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url("shoes", {
//     fetch_format: "auto",
//     quality: "auto",
//   });

//   console.log(optimizeUrl);

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url("shoes", {
//     crop: "auto",
//     gravity: "auto",
//     width: 500,
//     height: 500,
//   });

//   console.log(autoCropUrl);
// })();
