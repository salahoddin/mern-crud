import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTodos, deleteTodo, editTodo } from '../redux/actions/todoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Table = () => {
	const dispatch = useDispatch()
	const todo = useSelector((state) => state.todo)
	const { getLoading, todos, error } = todo

	useEffect(() => {
		dispatch(listTodos())
	}, [])

	const deleteHandler = (id) => {
		dispatch(deleteTodo(id))
	}

	const editHandler = (id) => {
		dispatch(editTodo(id))
	}
	return (
		<div className='container' style={{ height: '250px', overflowY: 'auto' }}>
			{getLoading && <Loader></Loader>}
			{error && <Message type='danger'>{error}</Message>}
			<div>
				<table className='table table-bordered'>
					<thead>
						<tr>
							<th scope='col'>ID</th>
							<th scope='col'>Task</th>
							<th scope='col'>Description</th>
							<th scope='col'>Date</th>
							<th scope='col'>Edit</th>
							<th scope='col'>Delete</th>
						</tr>
					</thead>
					<tbody>
						{todos &&
							todos.map((todo) => (
								<tr key={todo._id}>
									<td>{todo._id}</td>
									<td>{todo.name}</td>
									<td>{todo.description}</td>
									<td>{todo.date}</td>
									<td
										style={{
											height: '10px',
											width: '50px',
											textAlign: 'center',
										}}
									>
										<i
											className='far fa-edit'
											style={{ cursor: 'pointer' }}
											onClick={() => editHandler(todo._id)}
										></i>
									</td>
									<td
										style={{
											height: '10px',
											width: '50px',
											textAlign: 'center',
										}}
									>
										<i
											className='far fa-trash-alt'
											style={{ cursor: 'pointer' }}
											onClick={() => deleteHandler(todo._id)}
										></i>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table

// <div className='container' style={{ height: '250px', overflowY: 'auto' }}>
// 			{getLoading ? (
// 				<Loader></Loader>
// 			) : error ? (
// 				<Message>{error}</Message>
// 			) : (
// 				<div>
// 					<table className='table table-bordered'>
// 						<thead>
// 							<tr>
// 								<th scope='col'>ID</th>
// 								<th scope='col'>Task</th>
// 								<th scope='col'>Description</th>
// 								<th scope='col'>Date</th>
// 								<th scope='col'>Edit</th>
// 								<th scope='col'>Delete</th>
// 							</tr>
// 						</thead>
// 						<tbody>
// 							{todos &&
// 								todos.map((todo) => (
// 									<tr key={todo._id}>
// 										<td>{todo._id}</td>
// 										<td>{todo.name}</td>
// 										<td>{todo.description}</td>
// 										<td>{todo.date}</td>
// 										<td
// 											style={{
// 												height: '10px',
// 												width: '50px',
// 												textAlign: 'center',
// 											}}
// 										>
// 											<i
// 												className='far fa-edit'
// 												style={{ cursor: 'pointer' }}
// 												onClick={() => editHandler(todo._id)}
// 											></i>
// 										</td>
// 										<td
// 											style={{
// 												height: '10px',
// 												width: '50px',
// 												textAlign: 'center',
// 											}}
// 										>
// 											<i
// 												className='far fa-trash-alt'
// 												style={{ cursor: 'pointer' }}
// 												onClick={() => deleteHandler(todo._id)}
// 											></i>
// 										</td>
// 									</tr>
// 								))}
// 						</tbody>
// 					</table>
// 				</div>
// 			)}
// 		</div>
// 	)
