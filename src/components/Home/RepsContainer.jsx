import React, { useState } from "react";
import RepList from "./RepList";
import RepProfile from "./RepProfile";

const RepsContainer = () => {
  return (
    <div>
      <RepList />
      {currentRep ? <RepProfile rep={currentRep} /> : null}
    </div>
  );
};

export default RepsContainer;
