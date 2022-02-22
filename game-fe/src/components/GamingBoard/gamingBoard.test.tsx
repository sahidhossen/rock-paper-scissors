import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { initialState } from '../../store/reducers/gameReducer';
import { testStore, findByTestAttr } from '../../../testUtils';
import GamingBoard from '.';

type IinitState = typeof initialState;

const setUp = (iniState: IinitState) => {
	const store = testStore({ game: iniState });
	const wrapper = mount(
		<Provider store={store}>
			<GamingBoard />
		</Provider>,
	);
	return wrapper;
};

describe('Gaming board component', () => {
	let wrapper: any;
	beforeEach(() => {
		wrapper = setUp(initialState);
	});

	it('Should render without errors', () => {
		const component = findByTestAttr(wrapper, 'gaming-board');
		expect(component.length).toBe(1);
	});
});
