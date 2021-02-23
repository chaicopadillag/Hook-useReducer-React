import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../hooks/useForm';

const FormAddTodo = ({ handleAddTodo }) => {
	const [{ tarea }, handleChange, reset] = useForm({ tarea: '' });
	const handleSubmit = (e) => {
		e.preventDefault();
		if (tarea !== '') {
			const newTodo = {
				id: new Date().getTime(),
				tarea: tarea,
				estado: false,
			};
			handleAddTodo(newTodo);
			reset();
		}
	};

	return (
		<form method="POST" className="row g-3" onSubmit={handleSubmit}>
			<div className="col-8">
				<input type="text" name="tarea" className="form-control" placeholder="Tarea" value={tarea} onChange={handleChange} />
			</div>
			<div className="col-4 d-grid">
				<button className="btn btn-outline-primary" type="submit">
					Agregar tarea
				</button>
			</div>
		</form>
	);
};

FormAddTodo.propTypes = {
	handleAddTodo: PropTypes.func.isRequired,
};

export default FormAddTodo;
