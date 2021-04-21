import React from "react";
import { ReactComponent as ArrowIcon } from "../../SVG/00 General icons/CTA arrow.svg";

const Button = ({ txt, className, children }) => {
  return (
    <button className={className}>
      {txt}
      {children}

      {className === "btn__rounded--white" && (
        <ArrowIcon className="btn__icon"></ArrowIcon>
      )}
    </button>
  );
};

export default Button;
