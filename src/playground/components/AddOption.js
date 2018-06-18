import React from "react";

class AddOption extends React.Component {
  handleNewOption = e => {
    e.preventDefault();
    let newOption = e.target.elements.option.value.trim();
    if (!!newOption) {
      this.props.handleAddOption(newOption);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleNewOption}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    );
  }
}
export default AddOption;
