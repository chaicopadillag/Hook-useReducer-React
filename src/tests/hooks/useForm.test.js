import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('Prueba de Use Form', () => {
	const initialFrom = {
		id: new Date().getTime(),
		nombre: 'Code',
		correo: 'code@gmail.com',
	};
	test('debe de Regresar un formulario por Defecto', () => {
		// const wrapper=shallow(useForm);
		const { result } = renderHook(() => useForm(initialFrom));
		const [formValues] = result.current;
		expect(formValues).toEqual(initialFrom);
	});

	test('debe de Cambiar el valor del formulario el nombre', () => {
		const { result } = renderHook(() => useForm(initialFrom));
		const [, handleChange] = result.current;
		act(() => {
			handleChange({ target: { name: 'nombre', value: 'Karen' } });
		});
		expect(result.current[0].nombre).toBe('Karen');
	});
	test('debe de Restablecer formulario', () => {
		const { result } = renderHook(() => useForm(initialFrom));
		const [formValues, handleChange, reset] = result.current;
		act(() => {
			handleChange({ target: { name: 'nombre', value: 'Karen' } });
			reset();
		});
		expect(result.current[0]).toEqual(formValues);
	});
});
