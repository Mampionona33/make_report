import express from "express";
import * as dotenv from "dotenv";
import { router as uploadOutage } from "./routes/updloadOutage";
dotenv.config();

const app = express();

app.use("/public", express.static("public"));

app.use(uploadOutage);

app.get("/", function (req, res) {
  res.send("Hello from server");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server start on port test : ${port}`);
});
