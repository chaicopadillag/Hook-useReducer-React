import React, { memo } from 'react';

const Small = memo(({ valor }) => {
	console.log('Se vulve llamar', valor);
	return <small>{valor}</small>;
});

export default Small;
