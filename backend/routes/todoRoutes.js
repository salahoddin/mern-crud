import express from 'express'
import {
	addTodo,
	getTodos,
	updateTodo,
	deleteTodo,
} from '../controllers/todoControllers.js'

const router = express.Router()

router.route('/').post(addTodo).get(getTodos).put(updateTodo).delete(deleteTodo)
// router.post('/', addTodo).get(getTodo)

export default router
