import React from "react";

const SideBarRight = () => {
  return (
    <>
      <div className="sideBarContainer">
        <input type="file" value="import CSV" accept=".csv" />
        <input
          type="button"
          value={"Submit"}
          onClick={(ev) => console.log("test")}
        />
      </div>
    </>
  );
};

export default SideBarRight;
