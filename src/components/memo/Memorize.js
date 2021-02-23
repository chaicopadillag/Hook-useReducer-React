import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	return (
		<div>
			<h2>
				Memorize <Small valor={counter} />
			</h2>
			<hr />
			<button className="btn btn-primary" onClick={increment}>
				+1
			</button>
			<button
				className="btn-primary btn m-2"
				onClick={() => {
					setShow(!show);
				}}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</div>
	);
};

export default Memorize;
