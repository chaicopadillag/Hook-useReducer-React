import { shallow } from 'enzyme';
import FormAddTodo from '../../components/useReducer/FormAddTodo';

describe('Prueba de Todo Add', () => {
	const handleAddTodo = jest.fn();
	const wrapper = shallow(<FormAddTodo handleAddTodo={handleAddTodo} />);

	test('debe de mostrar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('NO debe de llamar handleAddTodo', () => {
		const formSubmit = wrapper.find('form').prop('onSubmit');
		formSubmit({ preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test('debe de llamar la funcion handledAddTodo', () => {
		const value = 'Aprender React';
		wrapper.find('input').simulate('change', { target: { value, name: 'tarea' } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			tarea: value,
			estado: false,
		});
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
