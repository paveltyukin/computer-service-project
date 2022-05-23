import React, { FC } from 'react'

interface TooltipItemProps {
	data: any
}

export const TooltipItem: FC<TooltipItemProps> = ({ data }) => {
	return (
		<div>
			{data.map((item: any) => {
				return (
					<div key={item.id}>
						{item.title} {item.description}
					</div>
				)
			})}
		</div>
	)
}
