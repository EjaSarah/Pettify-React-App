//creating a pet component
const Pet = (props) => {
  //pet gets props passed into and renders it
  // here we are creating an array
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.animal),
    React.createElement("h2", {}, props.name),
    React.createElement("h1", {}, props.breed),
  ]);
};

// always capitalise your components
// react has a one way data flow, which means you can pass something from app to pet but not the other way round.
// pet is the child and it can't mess with its parent app
//this makes debugging easy
//if pet has data thrown into it, you know it came from app
//makes data flow easy to read and explicit to follow
const App = () => {
  // a component must return something. This is the hello world of react application
  return React.createElement(
    "div",
    //   you could put the div attributes here but we left it empty
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "dog",
        name: "jam",
        breed: "scandani",
      }),
      React.createElement(Pet, {
        animal: "cat",
        name: "nina",
        breed: "naija",
      }),
      React.createElement(Pet, {
        animal: "goat",
        name: "stuby",
        breed: "native",
      }),
    ]
  );
};

const container = document.getElementById("root");
//   ReactDom.createRoot..this is the new way to render in react 18
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
