import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todoReducer } from './reducers/todoReducer'

const reducers = combineReducers({
	todo: todoReducer,
})

const middlewares = [thunk]

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
