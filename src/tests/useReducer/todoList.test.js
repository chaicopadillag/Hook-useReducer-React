import { shallow } from 'enzyme';
import TodoList from '../../components/useReducer/TodoList';
import demoTodos from '../demoTodos';

describe('Prueba de Todo List', () => {
	const handleDelete = jest.fn(),
		handleToggle = jest.fn();
	let wrapper = shallow(<TodoList todos={demoTodos} index={1} handleDelete={handleDelete} handleToogle={handleToggle} />);

	test('debe de mostrar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe tener dos <TodoListItem/>', () => {
		expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
		expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
	});
});
