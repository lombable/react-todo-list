import React, { useState } from "react";

function TodoForm() {
	const [toDoList, setToDoList] = useState([			
		"Clean apartment",
		"Walk my dog",
		"Cook"
	]);

	// State para tomar la información que ingresa el usuario
	const [userInput, setUserInput] = useState([]);

	const inputHandler = e => {
		//Handler que ejecuta acción si se presiona enter//
		if (e.keyCode === 13) {
			setToDoList(toDoList => [...toDoList, userInput]);
		}
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
						<li className="list-group-item" key={i}>
							{task}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoForm;
