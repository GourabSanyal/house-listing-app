import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import newsReducer from './reducers/newsReducer';

const rootRreducer = combineReducers({
    news: newsReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootRreducer, middleware);