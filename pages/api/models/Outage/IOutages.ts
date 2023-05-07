export interface IOutages {
  outages: IOutage[];
  repportDate: Date;
}

export interface IOutage {
  "TT Reference": string;
  "Assigned to": string;
  Created: string;
  "Customer TT Reference": string;
  "Fault Resolution": string;
  Number: string;
  "OOS Duration": number;
  "OOS End Time": string;
  "OOS Start Time": string;
  Opened: string;
  "Primary Cause": string;
  "Reconciled OOS Duration": number;
  "Reconciled OOS End Time": string;
  "Reconciled OOS Start Time": string;
  "Resolution Comments": string;
  "Root Cause 1": string;
  "Root Cause 2": string;
  "Root Cause 3": string;
  Site: string;
  State: string;
  Tenant: string;
}
