import React from "react";
import Button from "./Button";

const SectionMap = () => {
  return (
    <section className="map">
      <div className="map__card map__card-card1">
        <h2 className="map__card-heading">Mapa ekspozitura</h2>
        <Button className="btn__rounded--white">Pronađite ekspozituru</Button>
      </div>
      <div className="map__card map__card-card2">
        <h2 className="map__card-heading">Online ekspozitura</h2>
        <Button className="btn__rounded--white">Saznaj više</Button>
      </div>
    </section>
  );
};

export default SectionMap;
