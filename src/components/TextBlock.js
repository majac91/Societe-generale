import React from "react";
import Button from "./Button";
import { ReactComponent as ArrowIcon } from "../SVG/00 General icons/CTA arrow.svg";

const TextBlock = ({ heading, p, linkTxt, link, isHeroTxt }) => {
  return isHeroTxt === true ? (
    <div className="text hero">
      <h1 className="text__heading hero__heading">{heading}</h1>
      <p className="text__p hero__p">{p}</p>
      <Button className="btn__rounded--white">{linkTxt}</Button>
    </div>
  ) : (
    <div className="text">
      <h2 className="text__heading">{heading}</h2>
      <p className="text__p">{p}</p>
      <a className="text__link" href={link}>
        {linkTxt}
        <ArrowIcon className="text__link-icon"></ArrowIcon>
      </a>
    </div>
  );
};

export default TextBlock;
