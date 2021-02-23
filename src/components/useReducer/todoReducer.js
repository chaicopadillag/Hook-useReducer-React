const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];
		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);
		case 'toogle':
			return state.map((todo) => (todo.id === action.payload ? { ...todo, estado: !todo.estado } : todo));
		default:
			return state;
	}
};

export default todoReducer;
