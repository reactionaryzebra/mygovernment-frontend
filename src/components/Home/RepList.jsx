import React, { useState, useEffect } from "react";

const RepList = ({ address, setCurrentRep }) => {

  const [federalReps, setFederalReps] = useState([]);
  const [stateReps, setStateReps] = useState([]);
  const [localReps, setLocalReps] = useState([]);

  useEffect(
    () => {

      const repListQuery = `
        query Representative($address: String!){
          representatives(address: $address) {
            name
            office
            division
          }
        }
      `;

      const variables = { address: address };

      const fetchData = async () => {

        const data = await fetch("http://localhost:9000/graphql", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: repListQuery, variables })
        });
        const {data: {representatives}} = await data.json();

        setFederalReps(
          representatives.filter(rep =>
            rep.office.includes("United States")
          )
        );

        setStateReps(
          representatives.filter(
            rep =>
              rep.division.includes("state") &&
              !rep.office.includes("United States") &&
              !rep.division.includes("county") &&
              !rep.division.includes("place")
          )
        );

        setLocalReps(
          representatives.filter(
            rep =>
              rep.division.includes("place") || rep.division.includes("county")
          )
        );
      };

      fetchData();
      
    },
    []
  );

  return (
    <div>
      <div>
        <h3>Federal</h3>
      </div>
      <div>
        <ul>
          {federalReps.map((rep, i) => (
            <li key={i}>
              <a onClick={() => setCurrentRep(rep.name)}>
                {rep.office} - {rep.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>State</h3>
      </div>
      <div>
        <ul>
          {stateReps.map((rep, i) => (
            <li key={i}>
              <a onClick={() => setCurrentRep(rep.name)}>
                {rep.office} - {rep.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Local</h3>
      </div>
      <div>
        <ul>
          {localReps.map((rep, i) => (
            <li key={i}>
              <a onClick={() => setCurrentRep(rep.name)}>
                {rep.office} - {rep.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepList;
