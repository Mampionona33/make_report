import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const mongodbUser = process.env.MONGO_USER;
const mongodbMdp = process.env.MONGO_PASS_WORD;
let connectionString = process.env.ATLAS_URI || null;

if (connectionString && connectionString.length) {
  connectionString = connectionString.replace("<username>", mongodbUser);
  connectionString = connectionString.replace("<password>", mongodbMdp);
}

console.log("connectionString:", connectionString);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

export default db;
