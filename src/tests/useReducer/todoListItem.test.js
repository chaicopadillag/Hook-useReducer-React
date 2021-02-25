const { shallow } = require('enzyme');
const { default: TodoListItem } = require('../../components/useReducer/TodoListItem');
const { default: demoTodos } = require('../demoTodos');

describe('Prueba de TodoListItem', () => {
	const handleDelete = jest.fn(),
		handleToggle = jest.fn();
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<TodoListItem todo={demoTodos[0]} index={1} handleDelete={handleDelete} handleToogle={handleToggle} />);
	});

	test('Debe Mostrar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe llamar a la funcion handleDelete', () => {
		wrapper.find('button').simulate('click');
		expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
	});

	test('Debe llamar a la funcion handleToogle', () => {
		wrapper.find('p').simulate('click');
		expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
		// expect(handleDelete).toHaveBeenLastCalledWith(expect.any(Function));
	});

	test('Debe de Mostrar el texto correctamente', () => {
		expect(wrapper.find('p').text().trim()).toBe(`${1 + 1} .- ${demoTodos[0].tarea}`);
	});

	test('Debe de tener la clase text-decoration-line-through', () => {
		const todo = demoTodos[0];
		todo.estado = true;
		const wraper = shallow(<TodoListItem todo={todo} index={1} handleDelete={handleDelete} handleToogle={handleToggle} />);
		expect(wraper.find('p').hasClass('text-decoration-line-through')).toBe(true);
	});
});
