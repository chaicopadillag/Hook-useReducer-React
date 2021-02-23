import React, { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';
import './todo.css';
import TodoList from './TodoList';
import FormAddTodo from './FormAddTodo';
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleDelete = (id) => {
		const action = {
			type: 'delete',
			payload: id,
		};
		dispatch(action);
	};
	const handleToogle = (id) => {
		dispatch({
			type: 'toogle',
			payload: id,
		});
	};
	const handleAddTodo = (newTodo) => {
		dispatch({
			type: 'add',
			payload: newTodo,
		});
	};
	return (
		<div className="row">
			<div className="col-12">
				<h2>Todo App</h2>
				<hr />
				<FormAddTodo handleAddTodo={handleAddTodo} />
			</div>
			<div className="col-12 mt-4">
				<TodoList todos={todos} handleToogle={handleToogle} handleDelete={handleDelete} />
			</div>
		</div>
	);
};

export default TodoApp;
