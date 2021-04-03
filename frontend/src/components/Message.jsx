import React from 'react'

const Message = ({ type, children }) => {
	return (
		<div className={`alert alert-${type}`} role='alert'>
			{children}
		</div>
	)
}

export default Message
