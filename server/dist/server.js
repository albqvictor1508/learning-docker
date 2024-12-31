var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_fastify = __toESM(require("fastify"));

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var db = new import_client.PrismaClient();
var prisma_default = db;

// src/functions/create-user.ts
async function createUser({ email, password }) {
  try {
    const user = await prisma_default.user.create({
      data: { email, password }
    });
    return { user };
  } catch (error) {
    console.error(error);
    throw new Error("Erro na cria\xE7\xE3o do usu\xE1rio");
  }
}

// src/routes/create-user-route.ts
var createUserRoute = async (app2) => {
  app2.post("/users", async (request, reply) => {
    const { email, password } = request.body;
    if (!email || !password)
      return reply.status(400).send({ error: ["invalid fields"] });
    const user = await createUser({ email, password });
    return reply.send({ user });
  });
};

// src/functions/list-users.ts
async function listUsers() {
  const users = await prisma_default.user.findMany();
  return { users };
}

// src/routes/list-users-route.ts
var listUsersRoute = async (app2) => {
  app2.get("/users", async (request, reply) => {
    const users = await listUsers();
    return { users };
  });
};

// src/server.ts
var app = (0, import_fastify.default)();
app.get("/", (request, reply) => {
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
