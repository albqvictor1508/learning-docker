import fastify from "fastify";

const app = fastify();

(async function main() {
	try {
		app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
			console.log("HTTP server running on 3333");
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
})();
