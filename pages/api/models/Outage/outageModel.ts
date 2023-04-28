import mongoose, { Model } from "mongoose";
import outageSchema from "@/pages/api/schemas/outageSchema";

let Outages: Model<any>;

try {
  Outages = mongoose.model("Outages");
} catch {
  Outages = mongoose.model("Outages", outageSchema);
}

export default Outages;
