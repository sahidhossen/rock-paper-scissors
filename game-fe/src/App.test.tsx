import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { initialState } from './store/reducers/gameReducer';
import { testStore, findByTestAttr } from '../testUtils';
import App from './App';

const setUp = () => {
	const store = testStore({ game: initialState });
	const wrapper = mount(
		<Provider store={store}>
			<App />
		</Provider>,
	);
	return wrapper;
};

describe('App initiate without error', () => {
	let wrapper: any;
	beforeEach(() => {
		wrapper = setUp();
	});

	it('Should render without errors', () => {
		const component = findByTestAttr(wrapper, 'rounds');
		expect(component.length).toBe(1);
		expect(component.text()).toContain('Rounds 0');
	});
});
