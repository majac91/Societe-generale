import React from "react";
import TextBlock from "./TextBlock";
import Button from "./Button";

const SectionMeeting = () => {
  return (
    <section className="meeting container-sm">
      <div className="meeting__card">
        <div className="meeting__inner">
          <div className="meeting__text-block">
            <TextBlock
              heading="Iznenađujuće povoljni keš kredit"
              p="Rešite važna pitanja odmah, a kredit otplaćujte i na 100 meseci ako vam odgovara niža rata. Bez depozita, bez žiranata i vezanosti kredita za stranu valutu!"
              linkTxt="Izračunaj svoju ratu"
            ></TextBlock>
          </div>
          <div className="meeting__footer">
            <p className="meeting__footer-p">
              Naši iskusni bankari vam stoje na raspolaganju. Pronađimo zajedno
              najpovoljnije rešenje za vas.
            </p>
            <div className="meeting__btn">
              <Button
                className="btn__square--red"
                txt="Zakaži sastanak"
              ></Button>
            </div>
          </div>
        </div>
      </div>

      <div className="meeting__card">
        <div className="meeting__inner">
          <div className="meeting__text-block">
            <TextBlock
              heading="Stambeni kredit sa kombinovanom kamatom"
              p="Uz vas smo i kada donosite najznačajnije odluke. Pri odabiru savršenog doma, čak i kamatna stopa radi za vas. Fiksna ili varijabilna, odaberite sami nakon svake 3 godine otplate kredita."
              linkTxt="Izračunaj svoju ratu"
            ></TextBlock>
          </div>
          <div className="meeting__footer">
            <p className="meeting__footer-p">
              Naši iskusni bankari vam stoje na raspolaganju. Pronađimo zajedno
              najpovoljnije rešenje za vas.
            </p>
            <div className="meeting__btn">
              <Button
                className="btn__square--red"
                txt="Zakaži sastanak"
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMeeting;
