import React, { useState, useEffect } from "react";

const MyRepresentatives = ({ address }) => {
  const [repList, setRepList] = useState([]);

  const query = `
    query Representative($address: String!){
      representatives(address: $address) {
        name
        office
      }
    }
  `;

  const variables = { address: address };

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
      setRepList(parsedData.data.representatives);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h3>Federal</h3>
        <ul>
          {repList.map(rep => (
            <li>
              {rep.office} - {rep.name}
            </li>
          ))}
        </ul>
      </div>
      <div />
      <div>
        <h3>State</h3>
      </div>
      <div />
      <div>
        <h3>Local</h3>
      </div>
      <div />
    </div>
  );
};

export default MyRepresentatives;
