import db from "../utils/prisma";

export async function Test() {
	const user = {
		email: "bomdia",
		password: "msrrrrrrrrr",
	};

	await db.user.create({
		data: user,
	});
}
