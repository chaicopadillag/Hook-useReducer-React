import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {
	const [formValues, handleChange] = useForm({
		nombre: '',
		correo: '',
		password: '',
	});

	const { nombre, correo, password } = formValues;

	useEffect(() => {
		console.log('UseEfet cuando cambia correo');
	}, [correo]);

	const handleSumit = (e) => {
		e.preventDefault();
		console.log(formValues);
	};

	return (
		<form method="POST" onSubmit={handleSumit}>
			<h2>FormWithCustomHook</h2>
			<hr />
			<div className="form-group mb-2">
				<input type="text" name="nombre" className="form-control" placeholder="Nombre" value={nombre} onChange={handleChange} />
			</div>
			<div className="form-group mb-2">
				<input type="email" name="correo" className="form-control" placeholder="Correo" value={correo} onChange={handleChange} />
			</div>
			<div className="form-group mb-2">
				<input type="password" name="password" className="form-control" placeholder="Contraseña" value={password} onChange={handleChange} />
			</div>
			<div className="form-group">
				<input type="submit" className="btn btn-success" value="Enviar" />
			</div>
		</form>
	);
};

export default FormWithCustomHook;
