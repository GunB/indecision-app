let appRoot = document.getElementById("app");

let app = {
  title: "Indecition App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

const uploadOption = e => {
  e.preventDefault();
  let option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    option = "";
    rednerApp();
  }
};

const clearOptions = e => {
  app.options = [];
  rednerApp();
};

const selectOption = e => {
  const randNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randNum]);
};

let rednerApp = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      <h2>{app.subtitle}</h2>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={clearOptions}>Remove them all</button>
      <button disabled={app.options.length <= 0} onClick={selectOption}>
        Pick me an option
      </button>
      <ol>{app.options.map(option => <li>{option}</li>)}</ol>
      <form onSubmit={uploadOption}>
        <input type="text" name="option" />
        <button>Add options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

rednerApp();
