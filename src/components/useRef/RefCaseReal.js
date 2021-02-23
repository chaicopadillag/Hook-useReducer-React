import React, { useState } from 'react';
import MutipleCustomHooks from '../MutipleCustomHooks';

const RefCaseReal = () => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<h2>Use Ref Case Real</h2>
			<hr />
			<button
				className="btn btn-primary mb-2"
				onClick={() => {
					setShow(!show);
				}}>
				{show ? 'Hide' : 'Show'}
			</button>
			{show && <MutipleCustomHooks />}
		</div>
	);
};

export default RefCaseReal;
