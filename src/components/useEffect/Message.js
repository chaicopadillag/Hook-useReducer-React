import React, { useEffect } from 'react';

const Message = () => {
	useEffect(() => {
		console.log('Cuando se Monta');
		return () => {
			console.log('Cuando se Desmonta');
		};
	}, []);

	return (
		<div>
			<h2>Eres Genial!!!</h2>
		</div>
	);
};

export default Message;
