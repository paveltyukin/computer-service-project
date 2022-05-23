import { PrismaClient } from '@prisma/client'
import { devices, manufacturers, users } from '../data/links'

const prisma = new PrismaClient()

async function main() {
	await prisma.user.createMany({ data: users })
	await prisma.manufacturers.createMany({ data: manufacturers })
	await prisma.device.createMany({ data: devices })
}

main()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
