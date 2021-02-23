import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToogle, handleDelete }) => {
	return (
		<ul className="list-group list-group-flush">
			{todos.map((todo, index) => {
				return <TodoListItem todo={todo} index={index} handleToogle={handleToogle} handleDelete={handleDelete} key={todo.id} />;
			})}
		</ul>
	);
};
TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleToogle: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default TodoList;
