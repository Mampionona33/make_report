import express from "express";
import * as dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import csvParser from "csv-parser";

dotenv.config();

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("../public"));

// Configure multer
const upload = multer({ dest: "upload/" });

app.get("/upload", function (req, res) {
  res.send("Test upload");
});

app.post("/upload", upload.single("csvFile"), function (req, res) {
  const results = [];
  fs.createReadStream(req.file.path, "utf-8")
    .on("error", (er) => console.log(er))
    .pipe(csvParser())
    .on("data", (row) => {
      console.log(`data : ${row}`);
      results.push(row);
    })
    .on("end", () => {
      console.log(results);
      res.send(results);
    });
});

app.get("/", function (req, res) {
  res.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server start on port test : ${port}`);
});
