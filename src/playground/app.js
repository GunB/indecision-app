class IndecisionApp extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      options: params.options
    };
    this.title = "Indecision App";
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
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

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const optionPick = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[optionPick]);
  }

  handleAddOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.concat([{ text: option }])
      };
    });
  }

  handleDeleteOption(optionText) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionText !== option.text)
    }));
  }

  render() {
    return (
      <div>
        <Header title={this.title} />
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
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Action = props => {
  return (
    <button disabled={!props.hasOptions} onClick={props.handlePick}>
      What should I do?
    </button>
  );
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>Put your life in thehands of a computer</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Anonimo"
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>delete options</button>
      <ol>
        {props.options.map(option => (
          <Option
            handleDeleteOption={props.handleDeleteOption}
            optionText={option.text}
          />
        ))}
      </ol>
    </div>
  );
};

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

class AddOption extends React.Component {
  constructor(params) {
    super(params);
    this.handleNewOption = this.handleNewOption.bind(this);
  }

  handleNewOption(e) {
    e.preventDefault();
    let newOption = e.target.elements.option.value.trim();
    if (!!newOption) {
      this.props.handleAddOption(newOption);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleNewOption}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    );
  }
}

ReactDOM.render(
  <IndecisionApp options={[{ text: "2" }, { text: "1" }, { text: "Magic" }]} />,
  document.getElementById("app")
);
