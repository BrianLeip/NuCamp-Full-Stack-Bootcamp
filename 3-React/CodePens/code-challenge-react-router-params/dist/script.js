// No need to pay attention to the code below this comment. You have learned to use 'import' to bring in components from libraries in your React project. This is another way to do it that works better in Codepen. HashRouter is also used here instead of BrowserRouter due to Codepen. Do not be concerned about the differences. 
const { HashRouter, Switch, Route, Link } = ReactRouterDOM;

// The code you should pay attention to begins after this comment.

const { Nav, Navbar, NavbarBrand, NavItem, NavLink, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle } = Reactstrap;

const ALBUMSDATA = [
{
  id: 1,
  artist: "Massive Attack",
  title: "Mezzanine",
  year: 1998,
  cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Massive_Attack_-_Mezzanine.png/220px-Massive_Attack_-_Mezzanine.png" },

{
  id: 2,
  artist: "Fruit Bats",
  title: "The Ruminant Band",
  year: 2009,
  cover: "https://images-na.ssl-images-amazon.com/images/I/41n-Dui%2BZVL.jpg" },

{
  id: 3,
  artist: "Radiohead",
  title: "OK Computer",
  year: 1997,
  cover: "https://img.discogs.com/yIM4lSU_7uAcYRUP_paNthymO30=/fit-in/600x593/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1399301-1404414270-1807.jpeg.jpg" },

{
  id: 4,
  artist: "Nirvana",
  title: "Nevermind",
  year: 1991,
  cover: "https://images-na.ssl-images-amazon.com/images/I/71DQrKpImPL._SY355_.jpg" },

{
  id: 5,
  artist: "The Beatles",
  title: "White Album",
  year: 1968,
  cover: "https://images-na.ssl-images-amazon.com/images/I/21IVvn7zGAL.jpg" },

{
  id: 6,
  artist: "The Black Keys",
  title: "Attack & Release",
  year: 2008,
  cover: "https://images-na.ssl-images-amazon.com/images/I/71TsTBKrM%2BL._SY355_.jpg" },

{
  id: 7,
  artist: "Kings of Leon",
  title: "Only By The Night",
  year: 2008,
  cover: "https://images-na.ssl-images-amazon.com/images/I/71XMOHlbNrL._SY355_.jpg" }];



function Home() {
  return (
    React.createElement("h1", null, "Home"));

}

function Albums(props) {
  return (
    React.createElement("div", null,
    React.createElement("h1", null, "Albums"),
    React.createElement("ul", null,
    props.albumsData.map((album) =>
    React.createElement("li", { key: album.id },
    React.createElement(Link, { to: `/albums/${album.id}` },
    album.title, " - ", album.artist, " (", album.year, ")"))))));






}

function MyNav() {
  return (
    React.createElement("div", null,
    React.createElement(Navbar, { color: "light", dark: true },
    React.createElement(Nav, { navbar: true },
    React.createElement(NavbarBrand, null, React.createElement("h1", null, "NuCamp Challenge: React Router Params")),
    React.createElement(NavItem, null, React.createElement(Link, { to: "/" }, "Home")),
    React.createElement(NavItem, null, React.createElement(Link, { to: "/albums" }, "Albums"))))));




}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: ALBUMSDATA };

  }

  render() {

    const AlbumInfo = ({ match }) => {
      const album = this.state.albumsData.filter(album => album.id === +match.params.albumId)[0];
      return (
        React.createElement(Card, null,
        React.createElement(CardImg, { width: "200px", height: "200px", src: album.cover, alt: album.title }),
        React.createElement(CardBody, null,
        React.createElement(CardTitle, null, "Album: ", album.title, " (", album.year, ")"),
        React.createElement(CardSubtitle, null, "Artist: ", album.artist))));



    };

    return (
      React.createElement(Switch, null,
      React.createElement(Route, { exact: true, path: "/", component: Home }),
      React.createElement(Route, { path: "/albums/:albumId", component: AlbumInfo }),
      React.createElement(Route, { exact: true, path: "/albums", render: () => React.createElement(Albums, { albumsData: this.state.albumsData }) })));


  }}


function App() {
  return (
    React.createElement("div", null,
    React.createElement(MyNav, null),
    React.createElement("br", null),
    React.createElement(Main, null)));


}

// Stop paying attention here. Below code is just to make React Router work with Codepen.
// We are using HashRouter here, but outside of here you would use BrowserRouter for a web app.
ReactDOM.render(
React.createElement(HashRouter, null,
React.createElement(App, null)),

document.getElementById('root'));