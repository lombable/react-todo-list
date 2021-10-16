import React, { useRef, useState } from "react";

// todo list
function TodoForm() {
	const mySpan = useRef("");
	const [toDoList, setToDoList] = useState([
		"Clean apartment",
		"Walk my dog",
		"Cook"
	]);

	// State para tomar la información que ingresa el usuario
	const [userInput, setUserInput] = useState([]);

	// State para ocultar o mostrar el botón de cerrar
	const [displayClose, setDisplayClose] = useState("notdisplayed");

	const inputHandler = e => {
		//Handler que ejecuta acción si se presiona enter//
		if (e.keyCode === 13) {
			setToDoList(toDoList => [...toDoList, userInput]);
		}
	};

	//Mostrar el botón
	const showClose = e => {
		mySpan.current.className = "displayed";
	};

	// Ocultar el botón
	const hideClose = e => {
		mySpan.current.className = "notdisplayed";
	};

	return (
		<div className="container pt-5">
			<input
				className="form-control form-control-lg"
				type="text"
				placeholder="What needs to be done?"
				aria-label=".form-control-lg example"
				value={userInput}
				onKeyDown={inputHandler}
				onChange={e => {
					setUserInput(e.target.value);
				}}
			/>

			<ul className="list-group">
				{toDoList.map((task, i) => {
					return (
						<li
							className="list-group-item"
							key={i}
							onMouseEnter={e => showClose(e)}
							onMouseLeave={e => hideClose(e)}>
							{task}
							<span ref={mySpan} className="notdisplayed">
								<i className="fas fa-times float-right"></i>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoForm;
