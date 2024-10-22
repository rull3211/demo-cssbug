import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
// Helper to get __dirname in ES modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5173;
app.use(cors());
// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));
// Serve the index.html file for any unknown requests (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
