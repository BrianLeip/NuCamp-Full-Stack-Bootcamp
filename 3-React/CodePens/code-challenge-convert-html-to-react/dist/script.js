class App extends React.Component {
  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("h1", null, "Instructions"),
      React.createElement("p", null, "Time for a back-to-basics drill! Take the code in the HTML section of this Codepen and React-ify it in the JS section. Use at least ",
      React.createElement("strong", null, "two"), " components. No need for Reactstrap - ", React.createElement("a", { href: "https://react-cn.github.io/react/docs/tags-and-attributes.html", target: "_blank" }, React.createElement("strong", null, "use native JSX")), ". And don't worry about the CSS section right now. When you are done, the rendered view with the white background should look the same, but the HTML section should contain nothing but the 'root' div."),

      React.createElement("p", null, "Are you ", React.createElement("a", { href: "https://reactjs.org/docs/thinking-in-react.html", target: "_blank" }, "thinking in React"), " yet?"),
      React.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" })));


  }}



// Uncomment the below line.
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));