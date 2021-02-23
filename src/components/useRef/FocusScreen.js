import React, { useRef } from 'react';

const FocusScreen = () => {
	const inputRef = useRef();
	const handleFocus = () => {
		// document.querySelector('input').select();
		inputRef.current.select();
	};
	return (
		<div>
			<h2>Focus Screen</h2>
			<hr />
			<input ref={inputRef} type="text" className="form-control" placeholder="Nombre" />
			<button className="btn btn-primary mt-2" onClick={handleFocus}>
				Focus
			</button>
		</div>
	);
};

export default FocusScreen;
