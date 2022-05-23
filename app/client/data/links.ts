export const users = [
	{ email: `test@test.ru`, password: 'superpassword1' },
	{ email: `admin@admin.ru`, password: 'superpassword2' },
	{ email: `user@user.ru`, password: 'superpassword3' },
	{ email: `user@user.ru`, password: 'superpassword2' },
]

export const manufacturers = [
	{
		id: 1,
		title: 'Apple',
		description: 'Apple desc',
	},
	{
		id: 2,
		title: 'Samsung',
		description: 'Samsung desc',
	},
]

export const devices = [
	{
		id: 1,
		title: 'iPhone 4',
		description: 'iPhone 4 desc',
		manufacturer_id: 1,
	},
	{
		id: 2,
		title: 'iPhone 5',
		description: 'iPhone 5 desc',
		manufacturer_id: 1,
	},
	{
		id: 3,
		title: 'Note 2',
		description: 'Note 2 desc',
		manufacturer_id: 2,
	},
	{
		id: 4,
		title: 'Note 3',
		description: 'Note 3 desc',
		manufacturer_id: 2,
	},
]
