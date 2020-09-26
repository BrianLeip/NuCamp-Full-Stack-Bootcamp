// Example exercise from this article on Medium https://medium.com/byte-sized-react/controlled-forms-in-react-68e59362a119

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.formUpdate = this.formUpdate.bind(this);
  }

  formUpdate(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      React.createElement("div", { className: "form-group container" },
      React.createElement("label", null, "Controlled Form Input"),
      React.createElement("input", { type: "text",
        className: "form-control",
        "aria-describedby": "emailHelp",
        placeholder: "Update input here",
        value: this.state.input,
        onChange: this.formUpdate }),
      React.createElement("large", { className: "form-text text-muted" },
      this.state.input)));



  }}

ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));