const mongoose = require("mongoose");

const Outage = new mongoose.Schema({
  "TT Reference": { type: String },
  "Assigned to": String,
  Created: String,
  "Customer TT Reference": String,
  "Fault Resolution": String,
  Number: String,
  "OOS Duration": Number,
  "OOS End Time": String,
  "OOS Start Time": String,
  Opened: String,
  "Primary Cause": String,
  "Reconciled OOS Duration": Number,
  "Reconciled OOS End Time": String,
  "Reconciled OOS Start Time": String,
  "Resolution Comments": String,
  "Root Cause 1": String,
  "Root Cause 2": String,
  "Root Cause 3": String,
  Site: String,
  State: String,
  Tenant: String,
});

const outageSchema = new mongoose.Schema({
  outages: [Outage],
  repportDate: { type: String, required: true },
});

export default outageSchema;
