import React, { useCallback, useState } from 'react';
import CallbackHookChildren from './CallbackHookChildren';

const CallbackHook = () => {
	const [counter, setCounter] = useState(0);
	// const increment = () => {
	// 	setCounter(counter + 1);
	// };
	const increment = useCallback(
		(numero) => {
			setCounter((c) => c + numero);
		},
		[setCounter]
	);
	return (
		<div>
			<h3>CallbackHook: {counter}</h3>
			<hr />
			<CallbackHookChildren increment={increment} />
		</div>
	);
};

export default CallbackHook;
