import {combineReducers, createStore, applyMiddleware} from 'redux'
import postReducer from './postReducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	post: postReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))