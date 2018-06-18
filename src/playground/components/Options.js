import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>delete options</button>
      <ol>
        {props.options.map((option, i) => (
          <Option
            key={i}
            handleDeleteOption={props.handleDeleteOption}
            optionText={option.text}
          />
        ))}
      </ol>
    </div>
  );
};

export default Options;
