import axios from 'axios'
import * as TYPES from '../constants/todoConstants'

export const listTodos = () => async (dispatch) => {
	try {
		dispatch({ type: TYPES.GET_TODO_REQUEST })

		const { data } = await axios.get('/api/todos')

		dispatch({ type: TYPES.GET_TODO_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: TYPES.GET_TODO_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const addTodo = (todo) => async (dispatch) => {
	try {
		dispatch({ type: TYPES.ADD_TODO_REQUEST })

		const { data } = await axios.post('/api/todos', todo)

		dispatch({ type: TYPES.ADD_TODO_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: TYPES.ADD_TODO_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const deleteTodo = (id) => async (dispatch) => {
	try {
		dispatch({ type: TYPES.DELETE_TODO_REQUEST })

		//const { data } = await axios.delete(`/api/todos`, { params: { id })
		const { data } = await axios.delete('/api/todos', { params: { id } })
		dispatch({ type: TYPES.DELETE_TODO_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: TYPES.DELETE_TODO_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const editTodo = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: TYPES.EDIT_TODO_REQUEST })
		const { todo } = getState()
		const selectTedTodo = todo.todos.filter((todo) => todo._id === id)

		dispatch({ type: TYPES.EDIT_TODO_SUCCESS, payload: selectTedTodo })
	} catch (error) {
		dispatch({
			type: TYPES.EDIT_TODO_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const clearEditData = () => async (dispatch) => {
	try {
		dispatch({ type: TYPES.RESET_EDIT_DATA })
	} catch (error) {
		dispatch({
			type: TYPES.RESET_EDIT_DATA_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const updateTodo = (user) => async (dispatch) => {
	try {
		dispatch({ type: TYPES.UPDATE_TODO_REQUEST })

		const { data } = await axios.put(`/api/todos`, user)

		dispatch({ type: TYPES.UPDATE_TODO_SUCCESS, payload: data })
	} catch (error) {
		dispatch({
			type: TYPES.UPDATE_TODO_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
