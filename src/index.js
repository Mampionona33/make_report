import express from "express";
import * as dotenv from "dotenv";
import { router as uploadOutage } from "./routes/updloadOutage";
dotenv.config();

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("../public"));

app.use(uploadOutage);

app.get("/", function (req, res) {
  res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server start on port test : ${port}`);
});
