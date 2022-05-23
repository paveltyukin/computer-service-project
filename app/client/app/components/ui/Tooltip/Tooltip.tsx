import $class from './Tooltip.module.sass'
import { TooltipItem } from '@/components/ui/Tooltip/TooltipItem/TooltipItem'
import { gql, useQuery } from '@apollo/client'
import { FC } from 'react'

const getSearchQuery = (data: string) => {
	if (data === 'manufacturer') {
		return gql`
			query search($search: String!) {
				searchManufacturers(search: $search) {
					id
					title
					description
				}
			}
		`
	}

	return gql`
		query search($search: String!, $manufacturerId: Float) {
			searchDevices(search: $search, manufacturer_id: $manufacturerId) {
				id
				title
				description
			}
		}
	`
}

interface TooltipProps {
	type: string
	search: string
	manufacturerId?: number
}

export const Tooltip: FC<TooltipProps> = ({ type, search, manufacturerId }) => {
	const { loading, error, data } = useQuery(getSearchQuery(type), {
		variables: { search, manufacturerId },
	})

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		console.error(error)
		return <div>Error!</div>
	}

	return (
		<div className={$class.tooltip}>
			{type === 'device' && data.getDevicesBySearch && (
				<TooltipItem data={data.getDevicesBySearch} />
			)}
			{type === 'manufacturer' && data.getManufacturersBySearch && (
				<TooltipItem data={data.getManufacturersBySearch} />
			)}
		</div>
	)
}
