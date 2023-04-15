import { Router } from "express";
import fs from "fs";
import csvParser from "csv-parser";
import multer from "multer";
import checkUploadFile from "./middleware/checkUploadFile";
import format from "format-duration";

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
        JSON.stringify(row);
        results.push(row);

        // Delete upload csv from upload folder
        fs.unlink(req.file.path, (err) => console.log(err));
      })
      .on("end", () => {
        const sumOssDuration = results.reduce(
          (acc, cur) => acc + Number(cur["OOS Duration"]),
          0
        );

        const dtptNoCumul = sumOssDuration / 7 / 526;

        // const data = {
        //   sumOssDuration,
        // };
        res.render("dailyReport", {
          sumOssDuration: format(dtptNoCumul * 60 * 60 * 24 - 1),
        });
        // res.json({
        //   status: 200,
        //   data,
        // });
      });
  }
);
