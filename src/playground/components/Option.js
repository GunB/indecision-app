import React from "react";

const Option = props => (
  <li>
    {props.optionText}
    <button
      onClick={e => {
        e.preventDefault();
        props.handleDeleteOption(props.optionText);
      }}
    />
  </li>
);
export default Option;
