import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#app");
const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.optionPicked}
      onRequestClose={props.handleUnPick}
      contentLabel="Selected Option"
    >
      <h3>Selected!</h3>
      <p>{!!props.optionPicked && props.optionPicked.text}</p>
      <button onClick={props.handleUnPick}>Close</button>
    </Modal>
  );
};

export default OptionModal;
