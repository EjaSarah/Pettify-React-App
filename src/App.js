const Pet = () => {
  return React.createElement("div", {});
};

// always capitalise your components
const App = () => {
  // a component must return something. This is the hello world of react application
  return React.createElement(
    "div",
    //   you could put the div attributes here but we left it empty
    {},
    React.createElement("h1", {}, "Adopt Me!")
  );
};

const container = document.getElementById("root");
//   ReactDom.createRoot..this is the new way to render in react 18
const root = ReactDom.createRoot(container);
root.render(React.createElement(App));
