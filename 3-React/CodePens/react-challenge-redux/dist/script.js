const { createStore } = Redux;
const { Provider, connect } = ReactRedux;
// You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.

/* Data */
const INSTRUCTORS = [{
  name: 'Michael Steinberg',
  id: 0,
  color: 'blue',
  course: 'React' },
{
  name: 'James Pritchett',
  id: 1,
  color: 'green',
  course: 'React' },
{
  name: 'Mathew Moser',
  id: 2,
  color: 'orange',
  course: 'React' },
{
  name: 'Brent Schneider',
  id: 3,
  color: 'purple',
  course: 'React' }];


/* ------ START PAYING ATTENTION HERE ------------------------------------- */

/* REACT COMPONENTS */
/* A React component is able to get the application state as props from the Redux Store when it is: 
                          1) Nested inside a component that is wrapped in a <Provider> that is connected to a store (created somewhere with createStore)
                          2) It is subscribed to the store - you will not use store.subscribe() directly, but instead you will use connect() with mapStateToProps(), which handles subscribe() for you.
                          
                          If mapDispatchToProps() is also used with connect(), the component will be able to dispatch actions to the Redux Store as well. */

class App extends React.Component {
  render() {
    return (
      React.createElement("div", null,
      React.createElement("h1", null, "Nucamp Instructors"),
      React.createElement("hr", null),
      React.createElement(AddInstructor, { addInstructor: this.props.addInstructor }),
      React.createElement("hr", null),
      React.createElement(InstructorsList, { instructors: this.props.instructors })));


  }}


class InstructorsList extends React.Component {
  render() {
    return (
      React.createElement("ul", null,
      this.props.instructors.map((instructor) =>
      React.createElement("li", { key: instructor.id },
      React.createElement(Instructor, { instructor: instructor })))));




  }}


class AddInstructor extends React.Component {

  constructor(props) {
    super(props);

    this.inputName = null;
    this.inputCourse = null;
    this.inputColor = null;
    this.handleSubmit = this.handleSubmit.bind(this);

    this.setTextInputRef = inputElement => {
      console.log(inputElement.id);
      switch (inputElement.id) {
        case "name":this.inputName = inputElement;break;
        case "course":this.inputCourse = inputElement;break;
        case "color":this.inputColor = inputElement;break;}

    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addInstructor(this.inputName.value, this.inputCourse.value, this.inputColor.value);
    e.target.reset();
  }

  render() {
    return (
      React.createElement("form", { onSubmit: this.handleSubmit },
      React.createElement("label", { for: "name" }, "Name "),
      React.createElement("input", { id: "name", type: "text", ref: this.setTextInputRef }),
      React.createElement("label", { for: "course" }, " Course Taught: "),
      React.createElement("input", { id: "course", type: "text", ref: this.setTextInputRef }),
      React.createElement("label", { for: "color" }, " Color: "),
      React.createElement("input", { id: "color", type: "text", ref: this.setTextInputRef }),
      React.createElement("button", { type: "submit" }, " Add Instructor")));


  }}


class Instructor extends React.Component {
  render() {
    let style = { background: this.props.instructor.color };
    return (
      React.createElement("p", { style: style, className: "instructor" },
      this.props.instructor.name, " - ", this.props.instructor.course));


  }}



/* ACTION TYPE */
const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';


/* ACTION */
const addInstructor = (name, course, color) => ({
  type: ADD_INSTRUCTOR,
  payload: {
    name: name,
    course: course,
    color: color } });




/* REDUCER */

const Reducer = (state = INSTRUCTORS, action) => {
  switch (action.type) {
    case ADD_INSTRUCTOR:
      let instructor = action.payload;
      instructor.id = state.length;
      // instructor.color = "#000";
      return state.concat(instructor);
    default:
      return state;}

};


/* STORE & CONNECTIONS TO STORE */

const store = createStore(Reducer, INSTRUCTORS);

const mapStateToProps = state => {
  return {
    instructors: state };

};

/* This is a slightly different syntax for mapDispatchToProps than you've seen in your course project - as a function rather than as an object. See https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-a-function for an explanation. The syntax is not too different, and you will encounter this style in many projects. */
const mapDispatchToProps = dispatch => ({
  addInstructor: (name, course, color) => dispatch(addInstructor(name, course, color)) });



// The below line is written in a specific way to work with Codepen. Outside of Codepen, you would export default connect([args])(App). 
const AppExport = connect(mapStateToProps, mapDispatchToProps)(App);

/* FINAL RENDER - here, we have wrapped our root component with <Provider>  */
ReactDOM.render(React.createElement(Provider, { store: store }, React.createElement(AppExport, null)), document.getElementById("root"));