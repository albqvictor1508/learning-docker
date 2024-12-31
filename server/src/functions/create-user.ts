import db from "../utils/prisma";

export type createUserData = {
	email: string;
	password: string;
};

export async function createUser({ email, password }: createUserData) {
	try {
		const user = await db.user.create({
			data: { email, password },
		});

		return { user };
	} catch (error) {
		console.error(error);
		throw new Error("Erro na criação do usuário");
	}
}
