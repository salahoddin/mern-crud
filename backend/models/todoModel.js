import mongoose from 'mongoose'

const todoSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		date: { type: Date },
	},
	{
		timestamps: true,
	}
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
