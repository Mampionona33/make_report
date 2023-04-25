import React, { ChangeEvent, useState } from "react";

const SideBarRight = () => {
  const [file, setFile] = useState<File | undefined>();
  const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFile(ev.target.files?.[0]);
  };
  return (
    <form className="sideBarContainer" action="">
      <input type="file" accept=".csv" onChange={handleInputChange} />
      <input type="submit" className="button" value={"Submit"} />
    </form>
  );
};

export default SideBarRight;
