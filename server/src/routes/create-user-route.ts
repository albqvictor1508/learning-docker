import type { FastifyPluginAsync } from "fastify";
import { createUser, type createUserData } from "../functions/create-user";

export const createUserRoute: FastifyPluginAsync = async (app) => {
	app.post<{ Body: createUserData }>("/users", async (request, reply) => {
		const { email, password } = request.body;

		if (!email || !password)
			return reply.status(400).send({ error: ["invalid fields"] });

		const { user } = await createUser({ email, password });

		return reply.send({ user });
	});
};
