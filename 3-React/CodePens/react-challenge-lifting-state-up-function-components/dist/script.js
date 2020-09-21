class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcampName: "NuCamp!" };

  }

  render() {
    return (
      React.createElement(Welcome, { bootcampName: this.state.bootcampName }));

  }}


function Welcome({ bootcampName }) {
  return (
    React.createElement("h1", null, "Welcome to ", bootcampName, "!"));

}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));