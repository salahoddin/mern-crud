import dotenv from 'dotenv'
import express from 'express'
import color from 'colors'
import connectDB from './config/db.js'
import todoRoutes from './routes/todoRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/todos', todoRoutes)

// app.get('/', (req, res) => {
// 	res.send('API is running')
// })

const PORT = process.env.PORT || 500

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
