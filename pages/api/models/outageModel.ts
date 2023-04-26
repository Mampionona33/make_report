import mongoose from "mongoose";
import outageSchema from "../schemas/outageSchema";

const Outage = mongoose.models.Outage || mongoose.model("Outage", outageSchema);

console.log(Outage); // ajouter cette ligne

export default Outage;
