import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    optionPicked: this.props.optionPicked
  };
  title = "Indecision App";

  componentDidMount() {
    try {
      const json = JSON.parse(localStorage.getItem("options"));
      if (json) {
        this.setState(() => ({ options: json }));
      }
      console.log("fetching data");
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("Save data");
    }
  }

  componentWillUnmount() {
    console.log("WillUnmount");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const optionPicked = this.state.options[
      Math.floor(Math.random() * this.state.options.length)
    ];
    this.setState(() => ({ optionPicked: optionPicked }));
    console.log(optionPicked);
  };

  handleUnPick = () => {
    this.setState(() => ({
      optionPicked: null
    }));
  };

  handleAddOption = option => {
    this.setState(prevState => {
      return {
        options: prevState.options.concat([{ text: option }])
      };
    });
  };

  handleDeleteOption = optionText => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionText !== option.text)
    }));
  };

  render() {
    return (
      <div>
        <Header title={this.title} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>

        <OptionModal
          optionPicked={this.state.optionPicked}
          handleUnPick={this.handleUnPick}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
  optionPicked: null
};

export default IndecisionApp;
