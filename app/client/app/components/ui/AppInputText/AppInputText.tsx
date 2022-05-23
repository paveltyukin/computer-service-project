import $class from './AppInputText.module.sass'
import icon from '@/assets/images/icons/input.svg'
import { Tooltip } from '@/components/ui/Tooltip/Tooltip'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

interface AppInputTextProps {
	labelText?: string
	showIcon?: boolean
	hasTooltip?: boolean
}

export function AppInputText<T extends FieldValues>(
	props: UseControllerProps<T> & AppInputTextProps
) {
	const {
		field,
		fieldState: { error },
	} = useController<T>(props)

	const { labelText, showIcon, hasTooltip } = props

	return (
		<>
			{labelText && <label className={$class.label}>{labelText}</label>}
			<div className={$class.inputWrapper}>
				<input
					{...field}
					placeholder={field.name}
					name={field.name}
					className={classNames($class.input, { [$class.error]: error })}
				/>
				{showIcon && (
					<div className={$class.icon}>
						<Image src={icon} width="21" height="25" alt="icon" />
					</div>
				)}
				{hasTooltip && <Tooltip type={field.name} search={field.value ?? ''} />}
			</div>
		</>
	)
}
