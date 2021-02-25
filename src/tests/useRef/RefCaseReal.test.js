import { shallow } from 'enzyme';
import React from 'react';
import RefCaseReal from '../../components/useRef/RefCaseReal';

describe('Prueba en <RefCaseReal/>', () => {
	const wrapper = shallow(<RefCaseReal />);

	test('Debe de Mostrar Corretamente', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MutipleCustomHooks').exists()).toBe(false);
	});

	test('Debe de Mostrar el componente <MultipleCustomHool/> ', () => {
		wrapper.find('button').simulate('click');
		expect(wrapper.find('MutipleCustomHooks').exists()).toBe(true);
	});
});
