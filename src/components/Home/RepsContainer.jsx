import React, { useState } from "react";
import RepList from "./RepList";
import RepProfile from "./RepProfile";
import HomePage from '../../styles/HomePage'

const RepsContainer = ({ address }) => {
  const [currentRep, setCurrentRep] = useState("");
  return (
    <HomePage>
      <RepList address={address} setCurrentRep={setCurrentRep} />
      {currentRep ? (
        <RepProfile currentRep={currentRep} address={address} />
      ) : null}
    </HomePage>
  );
};

export default RepsContainer;
