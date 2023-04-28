import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";

interface ICsvData {
  "TT Reference": string;
  "Assigned to": string;
  Created: string;
  "Customer TT Reference": string;
  "Fault Resolution": string;
  Number: string;
  "OOS Duration": string;
  "OOS End Time": string;
  "OOS Start Time": string;
  Opened: string;
  "Primary Cause": string;
  "Reconciled OOS Duration": Number;
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

const SideBarRight = () => {
  const [csvData, setCsvData] = useState<any>([]);
  const [repportDate, setRepportDate] = useState<Date | null>(new Date());

  const handleOnFileLoad = (csvData: ICsvData[]) => {
    setCsvData(csvData);
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLInputElement>) => {
    ev.preventDefault();

    try {
      const API_BASED_URL = "/api/routes" || process.env.API_BASED_URL;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          outages: csvData,
          repportDate,
        }),
      };
      const res = await fetch(`${API_BASED_URL}/outage`, options);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sideBarContainer">
      <div className="sideBarContainer__form">
        <div className="sideBarContainer__form__items">
          <label htmlFor="date-picker" className="label">
            select repporting date
          </label>
          <DatePicker
            inline
            id="date-picker"
            selected={repportDate}
            dateFormat={"dd/mm/yyyy"}
            onChange={(date: Date) => setRepportDate(date)}
          />
        </div>
        <div className="sideBarContainer__form__items">
          <CSVReader
            onFileLoaded={handleOnFileLoad}
            parserOptions={{ header: true }}
            inputId="csv-input"
            inputStyle={{ display: "none" }}
          />
          <label htmlFor="csv-input" className="button">
            Upload CSV
          </label>
        </div>
        <input
          type="submit"
          className="button"
          value="Submit"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SideBarRight;
