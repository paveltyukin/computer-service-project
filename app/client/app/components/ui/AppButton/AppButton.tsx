import React, { FC } from 'react'
import $class from './AppButton.module.sass'

interface AppButtonProps {
	children: React.ReactNode
	buttonClass: string
}

export const AppButton: FC<AppButtonProps> = ({ buttonClass, children }) => {
	return <button className={$class[buttonClass]}>{children}</button>
}
