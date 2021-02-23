import React, { memo } from 'react';

const CallbackHookChildren = memo(({ increment }) => {
	console.log('Me volví llamar');
	return (
		<button className="btn btn-primary" onClick={() => increment(5)}>
			Incrementar +1
		</button>
	);
});

export default CallbackHookChildren;
