import React from 'react'

export const BaseNotification = (props) => {
	const { className, handleDeleteClick } = props

	return (
		<div className={`flex text-white slide-down p-2 ${className || ''}`}>
			{props.children}
			<span className="ml-auto" onClick={handleDeleteClick}>
				X
			</span>
		</div>
	)
}

export const NeutralNotification = (props) => (
	<BaseNotification className="bg-blue">
		{props.message}
	</BaseNotification>
)

export const NegativeNotification = (props) => (
	<BaseNotification className="bg-red">
		{props.message}
	</BaseNotification>
)

export const WarningNotification = (props) => (
	<BaseNotification className="bg-yellow-dark">
		{props.message}
	</BaseNotification>
)

export const PositiveNotification = (props) => (
	<BaseNotification className="bg-green">
		{props.message}
	</BaseNotification>
)
