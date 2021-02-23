import React, { useMemo, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import ProcesoPesado from '../helpers/ProcesoPesado';

const MemoHook = () => {
	const { counter, increment } = useCounter(100);
	const [show, setShow] = useState(true);
	const resultProcessPesado = useMemo(() => ProcesoPesado(counter), [counter]);
	return (
		<div>
			<h2>
				MemoHook <small>{counter}</small>
			</h2>
			<hr />
			<p>{resultProcessPesado}</p>
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

export default MemoHook;
