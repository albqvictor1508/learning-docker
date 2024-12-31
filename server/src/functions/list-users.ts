import db from "../utils/prisma";

export default async function listUsers() {
	const users = await db.user.findMany();

	return { users };
}
