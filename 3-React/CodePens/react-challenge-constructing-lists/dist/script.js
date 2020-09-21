class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [
      {
        id: 0,
        name: 'Greece',
        continent: 'Europe' },

      {
        id: 1,
        name: 'Laos',
        continent: 'Asia' },

      {
        id: 2,
        name: 'Zambia',
        continent: 'Africa' },

      {
        id: 3,
        name: 'Australia',
        continent: 'Oceania' }] };



  }

  renderCountries(countries) {
    return (
      React.createElement("div", null,
      countries.map(country => React.createElement("div", { key: country.id }, country.name, " - ", country.continent))));


  }

  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", { className: "title" }, "My Travel Bucket List"),
      this.renderCountries(this.state.countries)));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));