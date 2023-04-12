import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", function (req, res) {
  res.send("hello from server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server start on port : ${port}`);
});
