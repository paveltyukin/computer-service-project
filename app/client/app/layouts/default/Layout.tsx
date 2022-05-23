import Head from 'next/head'
import React, { FC } from 'react'

interface LayoutProps {
	children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title itemProp="headline">Компьютерная помощь</title>
				<meta itemProp="description" name="description" />
			</Head>
			{children}
		</>
	)
}
