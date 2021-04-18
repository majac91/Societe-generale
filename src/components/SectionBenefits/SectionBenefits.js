import React from "react";
import { ReactComponent as CashIcon } from "../../SVG/03 Benefits/kes kred.svg";
import { ReactComponent as InsuranceIcon } from "../../SVG/03 Benefits/osiguranje.svg";
import { ReactComponent as RefIcon } from "../../SVG/03 Benefits/ref.svg";
import { ReactComponent as StamIcon } from "../../SVG/03 Benefits/stam.svg";

const SectionBenefits = () => {
  return (
    <section className="benefits container-md">
      <div className="benefits__heading">
        <h2 className="benefits__heading-caption">
          Izdvojili smo za vas još vrlo korisnih ponuda
        </h2>
        <p className="benefits__heading-p">
          Nudimo vam spektar proizvoda i usluga koje život čine kvalitetnijim i
          jednostavnijim
        </p>
      </div>
      <div className="benefits__cards">
        <a className="benefits__card">
          <i className="benefits__card-icon">
            <CashIcon></CashIcon>
          </i>
          <h3 className="benefits__card-heading">Keš krediti</h3>
          <p className="benefits__card-p">
            Super brzo do keša sa otplatom do čak 100 meseci
          </p>
        </a>
        <a className="benefits__card">
          <i className="benefits__card-icon">
            <RefIcon></RefIcon>
          </i>
          <h3 className="benefits__card-heading">Krediti za refinansiranje</h3>
          <p className="benefits__card-p">
            Izmirite obaveze po postojećim kreditima drugih banaka
          </p>
        </a>
        <a className="benefits__card">
          <i className="benefits__card-icon">
            <RefIcon></RefIcon>
          </i>
          <h3 className="benefits__card-heading">Stambeni krediti</h3>
          <p className="benefits__card-p">
            Lako do stana uz stambene kredite koji se prilagođavaju vašim
            mogućnostima
          </p>
        </a>
        <a className="benefits__card">
          <i className="benefits__card-icon">
            <InsuranceIcon></InsuranceIcon>
          </i>
          <h3 className="benefits__card-heading">Osiguranje</h3>
          <p className="benefits__card-p">
            Budite bezbrižni, obezbedite se na vreme uz životno i neživotno
            osiguranje
          </p>
        </a>
      </div>
    </section>
  );
};

export default SectionBenefits;
