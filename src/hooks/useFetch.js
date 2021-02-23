import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {
	const isMounted = useRef(true);

	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			data: null,
			loading: true,
			error: null,
		});

		fetch(url)
			.then((respuesta) => (respuesta.ok ? respuesta.json() : Promise.reject(respuesta)))
			.then((json) => {
				if (isMounted.current) {
					setState({
						data: json,
						loading: false,
						error: null,
					});
				} else {
					console.log('set state no se monto');
				}
			})
			.catch((error) => console.log(error));
	}, [url]);
	return state;
};

export default useFetch;
