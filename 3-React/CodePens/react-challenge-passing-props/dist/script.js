class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120 },

      cryIfIWantTo: true };

  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement(Party, { partyType: this.state.partyType, entertainment: this.state.entertainment, venue: this.state.venue, cryIfIWantTo: this.state.cryIfIWantTo })));


  }}


class Party extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let okToCry = "";
    if (this.props.cryIfIWantTo == true) {
      okToCry = "It's my party and I'll cry if I want to.";
    } else {
      okToCry = "There's no crying in baseball!! (or birthday parties)";
    }
    return (
      React.createElement("div", null,
      React.createElement("h3", null, "Party Time!"),
      React.createElement("p", null, "This ", this.props.partyType, " party will be held at ", this.props.venue.name, " with a maximum capacity of ", this.props.venue.capacity, "."),
      React.createElement("p", null, "Featured entertainment: ", this.props.entertainment, "!"),
      React.createElement("i", null, okToCry)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));