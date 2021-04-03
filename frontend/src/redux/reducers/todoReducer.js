import * as TYPES from '../constants/todoConstants'

const INITIAL_STATE = {
	getLoading: false,
	addLoading: false,
	deleteLoading: false,
	todos: [],
	error: null,
	editLoading: false,
	updateLoading: false,
	editData: {},
}

export const todoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPES.GET_TODO_REQUEST: {
			return {
				...state,
				getLoading: true,
			}
		}
		case TYPES.GET_TODO_SUCCESS: {
			return {
				...state,
				getLoading: false,
				todos: [...action.payload],
			}
		}

		case TYPES.GET_TODO_FAIL: {
			return {
				...state,
				getLoading: false,
				error: action.payload,
			}
		}

		case TYPES.ADD_TODO_REQUEST: {
			return {
				...state,
				error: null,
				addLoading: true,
			}
		}
		case TYPES.ADD_TODO_SUCCESS: {
			return {
				...state,
				addLoading: false,
				todos: [...state.todos, action.payload],
			}
		}
		case TYPES.ADD_TODO_FAIL: {
			return {
				...state,
				addLoading: false,
				error: action.payload,
			}
		}

		case TYPES.DELETE_TODO_REQUEST: {
			return {
				...state,
				deleteLoading: true,
			}
		}
		case TYPES.DELETE_TODO_SUCCESS: {
			return {
				...state,
				deleteLoading: false,
				todos: state.todos.filter((todo) => todo._id !== action.payload.id),
			}
		}
		case TYPES.DELETE_TODO_FAIL: {
			return {
				...state,
				deleteLoading: false,
				error: action.payload,
			}
		}

		case TYPES.EDIT_TODO_REQUEST: {
			return {
				...state,
				editLoading: true,
			}
		}
		case TYPES.EDIT_TODO_SUCCESS: {
			return {
				...state,
				editLoading: false,
				editData: action.payload,
			}
		}

		case TYPES.EDIT_TODO_FAIL: {
			return {
				...state,
				editLoading: false,
			}
		}
		case TYPES.UPDATE_TODO_REQUEST: {
			return {
				...state,
				updateLoading: true,
			}
		}
		case TYPES.UPDATE_TODO_SUCCESS: {
			console.log(action.payload)
			return {
				...state,
				updateLoading: false,
				todos: state.todos.map((todo) =>
					todo._id !== action.payload._id ? todo : action.payload
				),
			}
		}

		case TYPES.UPDATE_TODO_FAIL: {
			return {
				...state,
				updateLoading: false,
				error: action.payload,
			}
		}

		case TYPES.RESET_EDIT_DATA: {
			return {
				...state,
				editLoading: false,
				updateLoading: false,
				editData: {},
			}
		}

		default:
			return state
	}
}

// export const editTodoReducer = (
// 	state = { editLoading: false, updateLoading: false, editData: {} },
// 	action
// ) => {
// 	switch (action.type) {
// 		case TYPES.EDIT_TODO_REQUEST: {
// 			return {
// 				...state,
// 				editLoading: true,
// 			}
// 		}
// 		case TYPES.EDIT_TODO_SUCCESS: {
// 			return {
// 				...state,
// 				editLoading: false,
// 				editData: action.payload,
// 			}
// 		}

// 		case TYPES.EDIT_TODO_FAIL: {
// 			return {
// 				...state,
// 				editLoading: false,
// 			}
// 		}
// 		case TYPES.UPDATE_TODO_REQUEST: {
// 			return {
// 				...state,
// 				updateLoading: true,
// 			}
// 		}
// 		case TYPES.UPDATE_TODO_SUCCESS: {
// 			return {
// 				...state,
// 				updateLoading: false,
// 			}
// 		}

// 		case TYPES.UPDATE_TODO_FAIL: {
// 			return {
// 				...state,
// 				updateLoading: false,
// 			}
// 		}

// 		case TYPES.RESET_EDIT_DATA: {
// 			return {
// 				...state,
// 				editLoading: false,
// 				updateLoading: false,
// 				editData: {},
// 			}
// 		}

// 		default:
// 			return state
// 	}
// }
