import React from "react";
import Heading from "../Heading/Heading";
import TextBlock from "../../components/TextBlock/TextBlock";

import card1img from "../../img/red overlay.jpg";
import card2img from "../../img/magazin 2.jpg";
import card3img from "../../img/magazin 3.jpg";
import { ReactComponent as Card1Icon } from "../../SVG/00 General icons/Link.svg";

const SectionMagazin = () => {
  return (
    <section className="magazin container-md">
      <Heading heading="SoGe magazin"></Heading>
      <div className="magazin__cards">
        <div className="magazin__card">
          <p className="magazin__card-subheading">ONLINE KREDIT</p>
          <div className="magazin__card-img magazin__card-img1">
            <img className="magazin__card-img" src={card1img}></img>
            <span className="magazin__card-img1-icon">
              <Card1Icon></Card1Icon>
            </span>
          </div>
          <TextBlock
            heading="Zašto je strpljenje jedna od ključnih karakteristika dobrog menadžera"
            p="Nova jedinstva opcija u Societe Generale e-banking platformi omogućava korisnicima da brzo i lako realizuju kompletan proces odobrenja kredita online. U nekoliko koraka u okviru e-banking platforme, dođite do željene sume novca!"
            linkTxt="Saznaj više"
          ></TextBlock>
        </div>
        <div className="magazin__card">
          <p className="magazin__card-subheading">INVESTICIONO BANKARSTVO</p>
          <img className="magazin__card-img" src={card2img}></img>
          <TextBlock
            heading="Šta kada niste sigurni šta želite i kada imate kreativnu blokadu"
            p="Societe Generale Osiguranje je osiguravajuće društvo specijalizovano za životna osiguranja. U Srbiji primenjujemo iskustva i znanja iz poslovanja SOGECAP na svetskom tržištu."
            linkTxt="Saznaj više"
          ></TextBlock>
        </div>
        <div className="magazin__card">
          <p className="magazin__card-subheading">FAKTORING</p>
          <img className="magazin__card-img" src={card3img}></img>
          <TextBlock
            heading="Zašto je strpljenje jedna od ključnih karakteristika dobrog menadžera"
            p="Nova jedinstva opcija u Societe Generale e-banking platformi omogućava korisnicima da brzo i lako realizuju kompletan proces odobrenja kredita online. U nekoliko koraka u okviru e-banking platforme, dođite do željene sume novca!"
            linkTxt="Saznaj više"
          ></TextBlock>
        </div>
      </div>
    </section>
  );
};

export default SectionMagazin;
