// You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.
const { Modal, ModalBody, Button } = Reactstrap;

// The code you should pay attention to begins after this comment.

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen });

  }

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Button, { type: "button", color: "primary", size: "lg", onClick: this.toggleModal }, "Push me!"),
      React.createElement(Modal, { isOpen: this.state.isModalOpen, toggle: this.toggleModal },
      React.createElement(ModalBody, null, "These are words."))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));