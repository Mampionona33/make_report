import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server start on port test : ${port}`);
});
