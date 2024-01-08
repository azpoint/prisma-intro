import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	//Create User and Post
	const double = await prisma.user.create({
		data: {
			name: "Fernando",
			email: "fernando@gmail.com",
			post: {
				create: {
					title: "Prisma Tut",
					content: "Tut practice",
				},
			},
		},
	});

	console.log(double);

	const posts = await prisma.post.findMany();

	console.log(posts);
}

main().catch((error) => console.log(error.message));
