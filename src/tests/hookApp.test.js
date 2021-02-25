import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Prueba de HooApp', () => {
	test('Deber de hacer un To Match Snapshot', () => {
		const wraper = shallow(<HookApp />);
		expect(wraper).toMatchSnapshot();
	});
});
