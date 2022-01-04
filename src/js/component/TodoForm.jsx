import React, { useState, useEffect } from "react";

function TodoForm() {
	const [toDoList, setToDoList] = useState([]);

	const getToDoTasks = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/lombable", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => setToDoList(data));
	};

	const updateToDoTasks = newData => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/lombable", {
			method: "PUT",
			body: JSON.stringify(newData),
			headers: {
				"Content-Type": "application/json"
			}
		});
	};

	const deleteToDoTasks = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/lombable", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/lombable", {
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json"
				}
			});
		});
	};

	useEffect(() => {
		getToDoTasks();
	}, []);

	// State para tomar la información que ingresa el usuario
	const [userInput, setUserInput] = useState([]);

	const inputHandler = e => {
		//Handler que ejecuta acción si se presiona enter//
		if (e.key === "Enter" && e.target.value !== "") {
			let newTodo = { label: e.target.value, done: false };
			setToDoList(
				toDoList.concat({ label: `${e.target.value}`, done: false }),
				updateToDoTasks([...toDoList, newTodo])
			);
			e.target.value = "";
		}
	};

	const handleClick = i => {
		setToDoList(toDoList.filter(item => item !== toDoList[i]));
	};

	return (
		<div className="container pt-5">
			<input
				className="form-control form-control-lg"
				type="text"
				placeholder="What needs to be done?"
				aria-label=".form-control-lg example"
				value={userInput}
				onKeyDown={e => inputHandler(e)}
				onChange={e => {
					setUserInput(e.target.value);
				}}
			/>

			<ul className="list-group">
				{toDoList.map((task, i) => {
					return (
						<li className="list-group-item ocultate" key={i}>
							{task.label}
							<span id={i} className="displayed">
								<i
									className="fas fa-times float-right"
									onClick={() => handleClick(i)}></i>
							</span>
						</li>
					);
				})}
			</ul>
			<div className="row mt-5">
				<button className="btn btn-light" onClick={deleteToDoTasks}>
					Erase all
				</button>
			</div>
		</div>
	);
}

export default TodoForm;
