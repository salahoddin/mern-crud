import React from 'react'
import Table from './components/Table'
import Input from './components/Input'

const App = () => {
	return (
		<div className='container-sm'>
			<h1 className='text-center'>MERN CRUD</h1>

			<Table></Table>
			<div className='container-sm'>
				<Input></Input>
			</div>
		</div>
	)
}

export default App
