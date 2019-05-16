import React, { useEffect, useState } from "react";

const RepProfile = ({ currentRep, address }) => {

  const [representative, setRepresentative] = useState({});

  useEffect(() => {

    const representativeQuery = `
      query Representative($address:String!, $name: String!){
        representative(address: $address, name: $name) {
          name
          office
          party
          photoUrl
          proPublicaId
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
          channels {
            type
            id
          }
        }
      }
    `;

    const variables = { name: currentRep, address: address };

    const fetchData = async () => {
      const data = await fetch("http://localhost:9000/graphql", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: representativeQuery, variables })
      });

      const {data: {representative: fetchedRepresentative}} = await data.json();

      setRepresentative(fetchedRepresentative);
    };
    fetchData();
  });

  return (
    <div>
      <img src={representative.photoUrl} style={{ width: "100px", height: "100px" }} />
      <h2>{representative.name}</h2>
      <h3>{representative.office}</h3>
      <h4>{representative.party}</h4>
      <div>
        <h4>Contact</h4>
        <div>
          <ul>
            {representative.channels
              ? representative.channels.map((channel, i) => (
                  <li key={i}>
                    <div>
                      <a
                        target="_blank"
                        href={`https://${channel.type}.com/${channel.id}`}
                      >
                        {channel.type}
                      </a>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
      {representative.proPublicaId ? (
        <div>
          <h4>Committees</h4>
          <div>
            <ul>
              {representative.committees
                ? representative.committees.map((committee, i) => (
                    <li key={i}>
                      <div>
                        <h5>
                          {committee.title} - {committee.name}
                        </h5>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      ) : null}
      {representative.proPublicaId ? (
        <div>
          <h4>Bills</h4>
          <div>
            <ul>
              {representative.bills
                ? representative.bills.map((bill, i) => (
                    <li key={i}>
                      <div>
                        <h5>{bill.short_title}</h5>
                        <p>{bill.summary}</p>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      ) : null}
      <div>
        <h4>News</h4>
        <div>
          <ul>
            {representative.news
              ? representative.news.map((article, i) => (
                  <li key={i}>
                    <div>
                      <h5>
                        <a href={article.url}>{article.title}</a>
                      </h5>
                      <p>{article.description}</p>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RepProfile;
