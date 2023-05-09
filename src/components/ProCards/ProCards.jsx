// import React from 'react'

import ProCard from "../ProCard/ProCard";

import "./ProCards.scss";

const ProCards = ({ homesArr }) => {
  return (
    <section className="cards_grid">
      {homesArr?.map((home) => (
        <ProCard key={home.id} home={home} />
      ))}
    </section>
  );
};

export default ProCards;
