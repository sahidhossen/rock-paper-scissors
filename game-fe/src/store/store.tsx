import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import reducers from './reducers';
import * as actions from './actions';
import thunk from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
