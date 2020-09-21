class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: "Nucamp" };

  }

  render() {
    const course = "React";
    return (
      React.createElement("div", null,
      React.createElement("span", { className: "blue-box" }, "bootcamp"),
      React.createElement("span", { className: "orange-box" }, "course")));


  }}


ReactDOM.render(React.createElement(Example, null), document.getElementById('root'));