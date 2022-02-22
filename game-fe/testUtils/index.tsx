// export const testStore = (initialState) => {
// 	const mockStore = configureMockStore(middlewares);
// 	const store = mockStore(initialState);
// 	return store;
// };
import { AnyAction } from 'redux'; // Or your own Action definition
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { storeType } from '../src/store';

type DispatchExts = ThunkDispatch<storeType, void, AnyAction>;

const middleware = [thunk];

export const testStore = (initialState: storeType) => {
	const mockStore = createMockStore<storeType, DispatchExts>(middleware);
	const store = mockStore(initialState);
	return store;
};

export const findByTestAttr = (component: any, attr: string) => {
	return component.find(`[data-test='${attr}']`);
};
