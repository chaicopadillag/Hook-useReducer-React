import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		nombre: '',
		correo: '',
	});

	const { nombre, correo } = formState;

	const handleChange = ({ target }) => {
		setFormState({ ...formState, [target.name]: target.value });
	};

	useEffect(() => {
		console.log('UseEfet cuando cargar');
	}, []);

	// useEffect(() => {
	// 	console.log('UseEfet cuando cambiar formState');
	// }, [formState]);

	// useEffect(() => {
	// 	console.log('UseEfet cuando cambiar correo');
	// }, [correo]);

	return (
		<>
			<h2>useEffect</h2>
			<hr />
			<div className="form-group mb-2">
				<input type="text" name="nombre" className="form-control" placeholder="Nombre" value={nombre} onChange={handleChange} />
			</div>
			<div className="form-group mb-2">
				<input type="email" name="correo" className="form-control" placeholder="Correo" value={correo} onChange={handleChange} />
			</div>
			{nombre === 'Code' && <Message />}
		</>
	);
};

export default SimpleForm;
