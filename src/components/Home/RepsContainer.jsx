import React, { useState } from "react";
import RepList from "./RepList";
import RepProfile from "./RepProfile";

const RepsContainer = ({ address }) => {
  const [currentRep, setCurrentRep] = useState("");
  return (
    <div>
      <RepList address={address} setCurrentRep={setCurrentRep} />
      {currentRep ? (
        <RepProfile currentRep={currentRep} address={address} />
      ) : null}
    </div>
  );
};

export default RepsContainer;
