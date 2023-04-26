const mongoose = require("mongoose");

const outageSchemas = new mongoose.Schema(
  {
    "TT Reference": { type: String, unique: true },
    Number: { type: String },
    State: { type: String },
    Site: { type: String },
    Tenant: { type: String },
    "OOS Start Time": { type: String },
    "OOS End Time": { type: String },
    "OOS Duration": { type: Number },
    "Reconciled OOS Duration": { type: Number },
    "Primary Cause": { type: String },
    "Root Cause 1": { type: String },
    "Root Cause 2": { type: String },
    "Fault Resolution": { type: String },
    "Resolution Comments": { type: String },
    Created: { type: String },
    Opened: { type: String },
  },
  {
    timestamps: true,
  }
);

export default outageSchemas;
