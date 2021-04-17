import React from "react";

const Button = ({ txt, Icon, className }) => {
  return (
    <button className={className}>
      {txt}
      {Icon && <Icon className="btn__icon"></Icon>}
    </button>
  );
};

export default Button;
