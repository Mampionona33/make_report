import { Router } from "express";
import fs from "fs";
import csvParser from "csv-parser";
import multer from "multer";
import checkUploadFile from "./middleware/checkUploadFile";

export const router = Router();

// Configure multer
const uploadOutage = multer({ dest: "upload/" });

router.post(
  "/uploadOutage",
  uploadOutage.single("csvFile"),
  checkUploadFile,
  function (req, res) {
    const results = [];
    fs.createReadStream(req.file.path, "utf-8")
      .on("error", (er) => console.log(er))
      .pipe(csvParser())
      .on("data", (row) => {
        console.log(`data : ${row}`);
        results.push(row);
      })
      .on("end", () => {
        const jsonData = JSON.stringify(results);
        res.send(jsonData);
      });
  }
);
