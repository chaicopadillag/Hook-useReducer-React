import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, index, handleToogle, handleDelete }) => {
	return (
		<li className="list-group-item d-flex justify-content-between pointer" key={index + 1}>
			<p className={`${todo.estado && 'text-decoration-line-through'}`} onClick={() => handleToogle(todo.id)}>
				{index + 1} .- {todo.tarea}
			</p>
			<button className="btn btn-outline-danger" onClick={() => handleDelete(todo.id)}>
				Eliminar
			</button>
		</li>
	);
};
TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	handleToogle: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
export default TodoListItem;
