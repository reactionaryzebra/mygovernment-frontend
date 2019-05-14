import React, { useEffect, useState } from "react";

const RepProfile = ({ currentRep, address }) => {
  const query = `
    query Representative($address:String!, $name: String!){
      representative(address: $address, name: $name) {
        name
        office
        division
      }
    }
  `;
  const variables = { name: currentRep, address: address };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:9000/graphql", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query, variables })
      });
      const parsedData = await data.json();
      console.log(parsedData);
    };
    fetchData();
  });

  return <div />;
};

export default RepProfile;
