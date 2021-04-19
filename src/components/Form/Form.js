import React, { useState } from "react";
import Heading from "../Heading/Heading";

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
    <section className="form container-sm">
      <Heading
        heading="Imate pitanja za nas?"
        p="Razgovarajte sa nama! Pitajte, sugerišite, recite šta mislite, preporučite - odgovor će vas vrlo brzo sačekati u vašem inboksu."
      ></Heading>
      <form className="form">
        <label className="form__label" htmlFor="email">
          Name
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
          Name
        </label>
        <textarea
          className="form__input"
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
    </section>
  );
};

export default Form;
