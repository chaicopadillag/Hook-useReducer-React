import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';
describe('Prueba de useCounter', () => {
	test('Dede de retonar los valores por defecto', () => {
		const { result } = renderHook(() => useCounter());
		expect(result.current.counter).toBe(1);
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	});
	test('Dede de retonar el valor enviado 100', () => {
		const { result } = renderHook(() => useCounter(100));
		expect(result.current.counter).toBe(100);
	});

	test('Debe de Incrementar +1', () => {
		const { result } = renderHook(() => useCounter(100));
		const { increment } = result.current;
		act(() => increment());
		expect(result.current.counter).toBe(101);
	});

	test('Debe de Decrementar -1', () => {
		const { result } = renderHook(() => useCounter(100));
		const { decrement } = result.current;
		act(() => decrement());
		expect(result.current.counter).toBe(99);
	});

	test('Debe de Resetear y devolver 20', () => {
		const { result } = renderHook(() => useCounter(20));
		const { reset, increment } = result.current;
		act(() => {
			increment();
			reset();
		});
		expect(result.current.counter).toBe(20);
	});
});
