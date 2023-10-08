import express from "express";
import connectToMongo from "./db.js";
import route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

connectToMongo();
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
