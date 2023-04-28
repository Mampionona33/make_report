declare const global: Global;
import { Global } from "node";
import mongoose from "mongoose";

let MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://ramamps33:<password>@cluster0.m8eactz.mongodb.net/make-report?retryWrites=true&w=majority";

const MONGODB_MDP = process.env.MONGODB_MDP;

if (MONGODB_MDP && MONGODB_MDP.length > 0) {
  MONGODB_URI = MONGODB_URI?.replace("<password>", MONGODB_MDP);
}

// console.log("MONGODB_MDP :", MONGODB_MDP);
// console.log("MONGODB_URI :", MONGODB_URI);

console.log(MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
