import React, { useEffect, useState } from "react";

const RepProfile = ({ currentRep, address }) => {

  const [rep, setRep] = useState({})

  const query = `
    query Representative($address:String!, $name: String!){
      representative(address: $address, name: $name) {
        name
        office
        party
        photoUrl
        news {
          url
          title
          description
        }
        bills {
          short_title
          summary
        }
        committees {
          name
          title
        }
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
      setRep(parsedData.data.representative)
    };
    fetchData();
  });

  return <div>
    <img src={rep.photoUrl} style={{width: '100px', height:'100px'}} />
    <h2>{rep.name}</h2>
    <h3>{rep.office}</h3>
    <h4>{rep.party}</h4>
    <div>
      <h4>Committees</h4>
      <div>
        <ul>
          {rep.committees ? rep.committees.map((committee, i) => <li>
            <div>
              <h5>
                {committee.title} - {committee.name}
              </h5>
            </div>
          </li>) : null}
        </ul>
      </div>
    </div>
    <div>
      <h4>Bills</h4>
      <div>
        <ul>
          {rep.bills ? rep.bills.map((bill, i) => <li>
            <div>
              <h5>
                {bill.short_title}
              </h5>
              <p>
                {bill.summary}
              </p>
            </div>
          </li>) : null}
        </ul>
      </div>
    </div>
    <div>
      <h4>
        News
      </h4>
      <div>
        <ul>
          {rep.news ? rep.news.map((article, i) =>
            <li key={i}>
              <div>
                <h5><a href={article.url}>{article.title}</a></h5>
                <p>{article.description}</p>
              </div>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  </div>;
};

export default RepProfile;
