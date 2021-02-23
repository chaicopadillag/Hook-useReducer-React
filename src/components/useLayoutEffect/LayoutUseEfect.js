import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

const LayoutUseEfect = () => {
	const refParrajo = useRef();

	const [boxSize, setBoxSize] = useState({});

	const { counter, increment } = useCounter();

	const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	const { quote } = !!data && data[0];

	useLayoutEffect(() => {
		setBoxSize(refParrajo.current.getBoundingClientRect());
	}, [quote]);
	return (
		<div>
			<h2>Layout Effect</h2>
			<hr />
			<button className="btn btn-primary" onClick={increment}>
				Siguiente
			</button>
			<hr />
			<blockquote className="blockquote d-flex">
				<p className="mb-2" ref={refParrajo}>
					{quote}
				</p>
			</blockquote>
			<hr />
			<pre>{JSON.stringify(boxSize, null, 3)}</pre>
		</div>
	);
};

export default LayoutUseEfect;
