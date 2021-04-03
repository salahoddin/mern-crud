import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addTodo,
	clearEditData,
	updateTodo,
} from '../redux/actions/todoActions'
import moment from 'moment'
import SmallLoader from './SmallLoader'

const Input = () => {
	const dispatch = useDispatch()

	const todo = useSelector((state) => state.todo)
	const { addLoading, deleteLoading, editLoading, editData, error } = todo

	const [todoData, setTodoData] = useState({
		name: '',
		description: '',
		date: '',
	})
	const convertToYYYYMMDD = (d) => {
		let date = new Date(d)
		let year = date.getFullYear()
		let month = date.getMonth() + 1
		let dt = date.getDate()

		if (dt < 10) {
			dt = '0' + dt
		}
		if (month < 10) {
			month = '0' + month
		}
		return year + '-' + month + '-' + dt
	}
	useEffect(() => {
		if (editData && editData[0]) {
			setTodoData({
				_id: editData[0]._id,
				name: editData[0].name,
				description: editData[0].description,
				date: editData[0].date ? convertToYYYYMMDD(editData[0].date) : '',
			})
		}
	}, [editData])

	const onChangeHandler = (e) => {
		setTodoData({ ...todoData, [e.target.name]: e.target.value })
	}

	const submitHandler = (e) => {
		e.preventDefault()
		if (editData && editData[0]) {
			dispatch(updateTodo(todoData))
			setTodoData({
				_id: '',
				name: '',
				description: '',
				date: '',
			})
		} else {
			dispatch(addTodo(todoData))
			setTodoData({
				_id: '',
				name: '',
				description: '',
				date: '',
			})
		}
	}

	const clearHandler = () => {
		setTodoData({ name: '', description: '', date: '' })
		dispatch(clearEditData())
	}
	return (
		<div className='container col-xs-3'>
			<h1 className='text-center'>ADD NEW TODO </h1>
			{addLoading && <SmallLoader></SmallLoader>}
			{deleteLoading && <SmallLoader></SmallLoader>}
			<form>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						className='form-control'
						id='name'
						name='name'
						value={todoData.name}
						aria-describedby='emailHelp'
						onChange={onChangeHandler}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='description'>Description</label>
					<input
						type='text'
						className='form-control'
						id='description'
						name='description'
						value={todoData.description}
						aria-describedby='emailHelp'
						onChange={onChangeHandler}
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='date'>date</label>
					<input
						type='date'
						className='form-control'
						id='date'
						name='date'
						value={todoData.date}
						aria-describedby='emailHelp'
						onChange={onChangeHandler}
					/>
				</div>

				<button
					type='submit'
					className='btn btn-primary mb-2 mr-5'
					onClick={submitHandler}
					style={{
						padding: '10px 20px',
						fontSize: '20px',
						borderRadius: '10px',
					}}
				>
					Save
				</button>
				<button
					type='button'
					className='btn btn-danger mb-2 mr-5'
					onClick={clearHandler}
					style={{
						padding: '10px 20px',
						fontSize: '20px',
						borderRadius: '10px',
					}}
				>
					Clear
				</button>
			</form>
		</div>
	)
}

export default Input
