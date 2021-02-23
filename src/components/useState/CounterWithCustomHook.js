import React from 'react';
import useCounter from '../../hooks/useCounter';

const CounterWithCustomHook = () => {
	const { state, increment, decrement, reset } = useCounter(500);
	return (
		<div>
			<h1>Counter with Hook: {state}</h1>
			<hr />
			<button className="btn  btn-primary m-2" onClick={() => decrement(2)}>
				-1
			</button>
			<button className="btn  btn-danger m-2" onClick={reset}>
				Reset
			</button>
			<button className="btn btn-success m-2" onClick={() => increment(2)}>
				+1
			</button>
		</div>
	);
};

export default CounterWithCustomHook;
