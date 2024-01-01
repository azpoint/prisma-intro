import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const double = await prisma.user.create({
		data: {
			name: "Fernando",
			email: "fernando@gmail.com",
			post: {
				create: {
					title: "Prisma Tut",
					content: "Tut practice"
				}
			}
		}
	})

	console.log(double)

	const posts = await prisma.post.findMany()

	console.log(posts)
}

main()