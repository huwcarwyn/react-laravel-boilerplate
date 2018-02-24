import React from 'react'

export const BaseFlashMessage = (props) => {
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

export const NeutralFlashMessage = (props) => (
	<BaseFlashMessage className="bg-blue">
		{props.message}
	</BaseFlashMessage>
)

export const NegativeFlashMessage = (props) => (
	<BaseFlashMessage className="bg-red">
		{props.message}
	</BaseFlashMessage>
)

export const WarningFlashMessage = (props) => (
	<BaseFlashMessage className="bg-yellow-dark">
		{props.message}
	</BaseFlashMessage>
)

export const PositiveFlashMessage = (props) => (
	<BaseFlashMessage className="bg-green">
		{props.message}
	</BaseFlashMessage>
)
