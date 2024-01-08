import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	//List relational data
	const users = await prisma.user.findMany({
		include: {
			post: true,
		},
	});
	users.forEach((user) => {
		console.log("-----------");
		console.log(`User: ${user.name}`);
		console.log(`Email:: ${user.email}`);

		user.post.forEach((post, i) => {
			console.log(`${i} - ${post.title}`);
		});
	});
}

main().catch((error) => console.log(error.message));
