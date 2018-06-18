import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h2 className="header__subtitle">
          Put your life in thehands of a computer
        </h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Anonimo"
};

export default Header;
