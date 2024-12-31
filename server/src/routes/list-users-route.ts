import type { FastifyPluginAsync } from "fastify";
import db from "../utils/prisma";
import listUsers from "../functions/list-users";

export const listUsersRoute: FastifyPluginAsync = async (app) => {
	app.get("/users", async (request, reply) => {
		const users = await listUsers();

		return { users };
	});
};
