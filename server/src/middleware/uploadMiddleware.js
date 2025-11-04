import multer from "multer";
import fs from "fs";
import path from "path";

// Define upload folder path (e.g., server/uploads)
const uploadPath = path.resolve("server/uploads");

// ✅ Check and create folder if not exists
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
  console.log("📁 Upload folder created at:", uploadPath);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });
export default upload;
