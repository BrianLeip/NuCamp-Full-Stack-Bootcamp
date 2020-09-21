// This array is used for the Example.
const GAMES = [
{ id: 0, name: "Chess" },
{ id: 1, name: "Go" },
{ id: 2, name: "Risk" },
{ id: 3, name: "Cribbage" },
{ id: 4, name: "Spit" }];


// This array is used for the Challenge.
const RESOURCES = [
{
  id: 0,
  title: "WesBos.com - Destructuring Objects",
  url: "https://wesbos.com/destructuring-objects/" },

{
  id: 1,
  title: "FreeCodeCamp - The Basics of Destructuring Props in React",
  url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" },

{
  id: 2,
  title: "MDN - Destructuring assignment",
  url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" },

{
  id: 3,
  title: "W3Schools - a target",
  url: "https://www.w3schools.com/tags/att_a_target.asp" }];



function App() {
  return (
    React.createElement("div", null,
    React.createElement(PageTitle, null),
    React.createElement(Games, null),
    React.createElement("hr", null),
    React.createElement(Challenge, null),
    React.createElement(Resources, null)));


}

function PageTitle() {
  return (
    React.createElement("h1", null, "Code Challenge: React Components and Object Destructuring"));

}

class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: GAMES };

  }

  render() {
    const gamesList = this.state.games.map(game => {
      return (
        React.createElement("li", { key: game.id },
        React.createElement(RenderGame, { game: game })));


    });

    return (
      React.createElement("div", null,
      React.createElement("h2", null, "Available Games"),
      React.createElement("ul", null, gamesList)));


  }}


class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resources: RESOURCES };
  }

  render() {
    const resourceList = this.state.resources.map(resource => {
      return (
        React.createElement("li", { key: resource.id },
        React.createElement(RenderResource, { resource: resource })));


    });
    return (
      React.createElement("div", null,
      React.createElement("h2", null, "Additional Resources"),
      React.createElement("ul", null, resourceList)));


  }}


function RenderGame(props) {
  return (
    React.createElement("strong", null, "Game ID ", props.game.id, ": ", props.game.name));

}

function RenderResource({ resource }) {
  return (
    React.createElement("strong", null, "Resource ID ", resource.id, ": ", React.createElement("a", { href: resource.url, target: "_blank" }, resource.url)));

}

function Challenge() {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("p", null, "For your Code Challenge, you will use the RESOURCES array (line 11)."),
    React.createElement("ul", null,
    React.createElement("li", null, React.createElement("strong", null, "Challenge 1:"), " Create a class component named ", React.createElement("strong", null, "Resources"), ". Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the ", React.createElement("strong", null, "App component"), ", beneath where the Challenge component is rendered."),
    React.createElement("li", null, React.createElement("strong", null, "Challenge 2:"), " Create a functional component named ", React.createElement("strong", null, "RenderResource"), ". Use object destructuring in its parameter list to pass in ", React.createElement("strong", null, "props.resource"), " as simply ", React.createElement("strong", null, "resource"), "."),
    React.createElement("li", null, React.createElement("strong", null, "Challenge 3:"), " List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured ", React.createElement("strong", null, "resource"), " argument. Title the list ", React.createElement("strong", null, "\"Additional Resources\".")),
    React.createElement("li", null, React.createElement("strong", null, "Challenge 4"), ": Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the \"anchor target attribute\"."))));



}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));