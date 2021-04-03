import React from 'react'
import LoadingIcon from './loading.gif'
const SmallLoader = () => {
	return (
		<div className='text-center'>
			<img src={LoadingIcon} alt='loading' />
		</div>
	)
}

export default SmallLoader
