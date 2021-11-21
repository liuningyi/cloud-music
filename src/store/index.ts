import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))