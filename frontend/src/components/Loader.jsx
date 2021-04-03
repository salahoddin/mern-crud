import React from 'react'

const Loader = () => {
	return (
		<div
			className='spinner-border'
			role='status'
			animation='border'
			style={{
				width: '100px',
				height: '100px',
				margin: 'auto',
				display: 'block',
			}}
		>
			<span className='sr-only'>Loading...</span>
		</div>
	)
}

export default Loader
