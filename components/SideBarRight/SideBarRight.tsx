import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";

const SideBarRight = () => {
  const [data, setData] = useState<any>([]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleOnFileLoad = (csvData: any[]) => {
    setData(csvData);
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
            selected={startDate}
            dateFormat={"dd/mm/yyyy"}
            onChange={(date: Date) => setStartDate(date)}
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
          onClick={() => console.log(startDate, data)}
        />
      </div>
    </div>
  );
};

export default SideBarRight;
