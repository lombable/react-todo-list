//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import TodoForm from "./component/TodoForm.jsx";

//render your react application

const App = () => {
	return <TodoForm />;
};

ReactDOM.render(<App />, document.querySelector("#app"));
