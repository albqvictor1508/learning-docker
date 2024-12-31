import fastify, { type FastifyReply, type FastifyRequest } from "fastify";
import { createUserRoute } from "./routes/create-user-route";
import { listUsersRoute } from "./routes/list-users-route";

const app = fastify();

app.get("/", (request: FastifyRequest, reply: FastifyReply) => {
	return reply.send({ message: "hello world!!!" });
});

app.register(createUserRoute);
app.register(listUsersRoute);

try {
	app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
		console.log("HTTP server running on 3333");
	});
} catch (error) {
	console.error(error);
}
