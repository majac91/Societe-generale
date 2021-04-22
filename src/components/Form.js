import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";
import { ReactComponent as Check } from "../SVG/05 Ebanking primer/check.svg";

const Form = () => {
  const [charCount, setCharCount] = useState({ input: 0, textarea: 0 });
  const [isMaxCount, setIsMaxCount] = useState({
    input: false,
    textarea: false,
  });

  function handleCharCount(field, charLimit, e) {
    setCharCount((current) => {
      return { ...current, [field]: e.target.value.length };
    });

    setIsMaxCount((current) =>
      e.target.value.length > charLimit
        ? { ...current, [field]: true }
        : { ...current, [field]: false }
    );
  }

  return (
    <section className="form container-xxs">
      <Heading
        heading="Imate pitanja za nas?"
        p="Razgovarajte sa nama! Pitajte, sugerišite, recite šta mislite, preporučite - odgovor će vas vrlo brzo sačekati u vašem inboksu."
      ></Heading>

      <form className="form">
        <label className="form__label" htmlFor="email">
          Upišite svoju email adresu
        </label>
        <input
          className="form__input"
          id="name"
          onChange={(e) => handleCharCount("input", 50, e)}
        />
        <div className="form__counter">
          {charCount.input}
          <span
            className={`${
              isMaxCount.input ? "form__counter-error" : "form__counter-count"
            }`}
          >
            /50
          </span>
        </div>

        <label className="form__label" htmlFor="email">
          Postavite nam pitanje ili kratko opišite svoju sugestiju
        </label>
        <textarea
          className="form__input textarea"
          id="name"
          onChange={(e) => handleCharCount("textarea", 350, e)}
        ></textarea>
        <div className="form__counter">
          {charCount.textarea}
          <span
            className={`${
              isMaxCount.textarea
                ? "form__counter-error"
                : "form__counter-count"
            }`}
          >
            /350
          </span>
        </div>
      </form>

      <div className="form__footer">
        <div className="form__footer-checkbox">
          <input id="checkbox" type="checkbox"></input>
          <span className="check">
            <Check></Check>
          </span>
        </div>
        <label className="form__footer-checkbox-label" htmlFor="checkbox">
          Želite da čujete korisne savete i budete u toku?
        </label>

        <Button txt="Pošalji" className="btn__square--red desktop">
          Pošalji
        </Button>
      </div>
      <Button className="btn__square--red mobile">Pošalji</Button>
    </section>
  );
};

export default Form;
