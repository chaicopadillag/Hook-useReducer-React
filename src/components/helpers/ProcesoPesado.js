const ProcesoPesado = (iterations) => {
	for (let i = 0; i < iterations; i++) {
		console.log('Iterando...');
	}
	return `${iterations}, iteraciones completadas!!!`;
};

export default ProcesoPesado;
