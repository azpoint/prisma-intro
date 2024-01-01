import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const newUser = await prisma.user.create({
		data: {
			name: "Lucia",
			email: "lucy@gmail.com",
		},
	});

	const newPost = await prisma.post.create({
		data: {
			title: "My first post",
			content: "This is my first post",
			authorId: newUser.id
			// author: {
			// 	connect: {
			// 		id: newUser.id
			// 	}
			// }
		},
	});

	console.log(newPost)
}

main();
