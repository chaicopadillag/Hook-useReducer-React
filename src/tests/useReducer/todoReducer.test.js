import todoReducer from '../../components/useReducer/todoReducer';
import demoTodos from '../demoTodos';

describe('Prueba de Todo Reducer', () => {
	test('Debe de retornar el estado por defecto', () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	});

	test('debe agregar un Todo', () => {
		const newTodo = {
			id: 3,
			nombre: 'Apreder Firebase',
			estado: false,
		};
		const state = todoReducer(demoTodos, {
			type: 'add',
			payload: newTodo,
		});
		expect(state).toEqual([...demoTodos, newTodo]);
		expect(state.length).toBe(3);
	});

	test('debe borrar todo', () => {
		const state = todoReducer(demoTodos, {
			type: 'delete',
			payload: 2,
		});
		expect(state.length).toBe(1);
		expect(state).toEqual([demoTodos[0]]);
	});
	test('Debe cambiar el estado de un Todo', () => {
		const state = todoReducer(demoTodos, {
			type: 'toogle',
			payload: 2,
		});
		expect(state).not.toEqual(demoTodos);
		expect(state[1].estado).toBe(true);
		expect(state[0]).toEqual(demoTodos[0]);
	});
});
