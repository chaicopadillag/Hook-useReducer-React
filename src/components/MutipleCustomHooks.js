import React from 'react';
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';

const MutipleCustomHooks = () => {
	const { counter, increment } = useCounter();
	const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { quote, author } = !!data && data[0];
	return (
		<div>
			<h2>MutipleCustomHooks</h2>
			<hr />
			{loading ? (
				<div className="alert alert-success text-center">Cargando...</div>
			) : (
				<blockquote className="blockquote">
					<p className="mb-2">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}
			<hr />
			<button className="btn btn-primary" onClick={increment}>
				Siguiente
			</button>
		</div>
	);
};

export default MutipleCustomHooks;
