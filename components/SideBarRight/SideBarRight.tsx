import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const SideBarRight = () => {
  const [data, setData] = useState<any>([]);

  const handleOnFileLoad = (csvData: any[]) => {
    setData(csvData);
  };

  return (
    <div className="sideBarContainer">
      <CSVReader
        onFileLoaded={handleOnFileLoad}
        parserOptions={{ header: true }}
        inputId="csv-input"
        inputStyle={{ display: "none" }}
      />
      <label htmlFor="csv-input" className="button">
        Upload CSV
      </label>
      <input
        type="submit"
        className="button"
        value="Submit"
        onClick={() => console.log(data)}
      />
    </div>
  );
};

export default SideBarRight;
