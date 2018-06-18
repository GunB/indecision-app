let appRoot = document.getElementById("app");

let template = (
  <div>
    <h1>Indecision App</h1>
    <p>Hello! wellcom to React</p>
    <ol>
      <li>Magical</li>
      <li>Drama</li>
    </ol>
  </div>
);

let userName = "Heiner Angarita";
let userAge = 27;
let userLocation = "Colombia";
let user = {
  name: "Heiner Angarita",
  age: 27,
  location: "Colombia"
};

function getLocation(user) {
  if (user.location) {
    return user.location;
  }
  return "NoIdea";
}

let getFirstName = user => (user.name ? user.name.split(" ")[0] : "No idea");

let template2 = (
  <div>
    <h1>
      {user.name} + {getFirstName(user)}
    </h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user)}</p>
  </div>
);

let number = 0;
const someId = "theId";
const addOne = () => {
  number++;
  renderApp();
};
const subOne = () => {
  number--;
  renderApp();
};
const resetCount = () => {
  number = 0;
  renderApp();
};

const renderApp = () => {
  const templateNew = (
    <div>
      <p>Counting: {number}</p>
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
  ReactDOM.render(templateNew, appRoot);
};

renderApp();
