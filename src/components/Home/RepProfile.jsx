import React, { useEffect, useState } from "react";
import Profile from '../../styles/Profile'
import ContactList from '../../styles/ContactList'
import CollapsibleParent from '../../styles/CollapsibleParent'
import CollapsibleChild from '../../styles/CollapsibleChild'

const graphqlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT

const openCollapsible = e => {
  e.currentTarget.querySelector('div').classList.toggle('open')
}

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
      const data = await fetch(graphqlEndpoint, {
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
    <Profile>
      <div className={'header'}>
        <img src={representative.photoUrl || '../images/default-user.jpg'} className={'headshot'} />
        <div>
          <h2>{representative.name}</h2>
          <h3>{representative.office}</h3>
          <h4>{representative.party}</h4>
        </div>
      </div>
      <CollapsibleParent onClick={e => openCollapsible(e)}>
        <h4>Contact</h4>
        <CollapsibleChild>
          <ContactList>
            {representative.channels
              ? representative.channels.map((channel, i) => (
                  <li key={i}>
                    <div>
                      <a
                        target="_blank"
                        href={`https://${channel.type}.com/${channel.id}`}
                      >
                        <img src={`../images/${channel.type}.png`} />
                      </a>
                    </div>
                  </li>
                ))
              : null}
          </ContactList>
        </CollapsibleChild>
      </CollapsibleParent>
      {representative.proPublicaId ? (
        <CollapsibleParent onClick={e => openCollapsible(e)}>
          <h4>Committees</h4>
          <CollapsibleChild>
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
          </CollapsibleChild>
        </CollapsibleParent>
      ) : null}
      {representative.proPublicaId ? (
        <CollapsibleParent onClick={e => openCollapsible(e)}>
          <h4>Bills</h4>
          <CollapsibleChild>
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
          </CollapsibleChild>
        </CollapsibleParent>
      ) : null}
      <CollapsibleParent onClick={e => openCollapsible(e)}>
        <h4>News</h4>
        <CollapsibleChild>
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
        </CollapsibleChild>
      </CollapsibleParent>
      Free Vector Art by <a href="https://www.vecteezy.com/">Vecteezy</a>
    </Profile>
  );
};

export default RepProfile;
