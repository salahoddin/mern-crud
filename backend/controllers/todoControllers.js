import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'

// @desc   Get all todo
// @route   GET /
// @access  Public
export const getTodos = asyncHandler(async (req, res) => {
	const todos = await Todo.find({})
	res.status(201).json(todos)
})
// @desc    Create new todo
// @route   POST /
// @access  Public
export const addTodo = asyncHandler(async (req, res) => {
	const { name, description, date } = req.body
	const todo = await Todo.create({
		name: name,
		description: description,
		date: date,
	})

	if (todo) {
		res.status(201).json({
			_id: todo._id,
			name: todo.name,
			description: todo.description,
			date: todo.date,
		})
	} else {
		res.status(400)
		throw new Error('Invalid to do data')
	}
})

// @desc    Update new todo
// @route   Put /
// @access  Public
export const updateTodo = asyncHandler(async (req, res) => {
	const todo = await Todo.findById(req.body._id)

	if (todo) {
		todo.name = req.body.name || todo.name
		todo.description = req.body.description || todo.description
		todo.date = req.body.date || todo.date

		const updatedTodo = await todo.save()

		res.json({
			_id: updatedTodo._id,
			name: updatedTodo.name,
			description: updatedTodo.description,
			date: updatedTodo.date,
		})
	} else {
		res.status(404)
		throw new Error('Todo not found')
	}
})

// @desc    Delete a todo
// @route   delete /
// @access  Public
export const deleteTodo = asyncHandler(async (req, res) => {
	// const todo = await Todo.findById(req.body._id)
	const todo = await Todo.findById(req.query.id)

	if (todo) {
		await todo.remove()
		// res.json({ message: 'Todo removed' })
		res.json({ message: 'Todo removed', id: todo._id })
	} else {
		res.status(404)
		throw new Error('Todo not found')
	}
})
