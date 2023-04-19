import mongoose from "mongoose";
import outageSchemas from "../schema/outageSchemas";

const Outage = mongoose.model("Outage", outageSchemas);

console.log(Outage); // ajouter cette ligne

export default Outage;
