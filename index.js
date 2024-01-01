import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
	//Data creation
	// const newUser = await prisma.user.create({
	// 	data: {
	// 		email: "Lucia",
	// 		name: "lucia@gmail.com"
	// 	}
	// })
	// console.log(newUser)

	//List data
	const users = await prisma.user.findMany()

	users.map(user => console.log(`${user.id} - ${user.name} - ${user.lastname} - ${user.email}`))

	//Single data request
	// const user = await prisma.user.findFirst({
	// 	where: {
	// 		OR: [
	// 			{id:1},
	// 			{email: "juan@gmail.com"}
	// 		]
	// 	}
	// })
	// console.log(user)

	//Delete data
	// try {
	// 	const user = await prisma.user.delete({
	// 		where: {
	// 			id: 7
	// 		}
	// 	})
	// 	console.log(user)
	// } catch (error) {
	// 	console.log(error.meta.cause)
	// }

	//Update data
	// const user = await prisma.user.update({
	// 	where: {
	// 		id: 3
	// 	},
	// 	data: {
	// 		name: "Alex",
	// 		lastname: "Z"
	// 	}
	// })
	// console.log(user)

	//Update Many
	// const result = await prisma.user.updateMany({
	// 	where: {
	// 		id: 4
	// 	},
	// 	data: {
	// 		lastname: "Perez"
	// 	}
	// })
	// console.log(result)

	//Upsert - special prisma function to create data if does not exist and if it exist will update it
	const user = await prisma.user.upsert({
		where: {
			email: "john@gmail.com"
		},
		create: {
			email: "john@gmail.com",
			name: "John"
		},
		update: {
			lastname: "Fizz"
		}
	})
	console.log(user)
}


main()