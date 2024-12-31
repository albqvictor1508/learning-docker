var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/list-users-route.ts
var list_users_route_exports = {};
__export(list_users_route_exports, {
  listUsersRoute: () => listUsersRoute
});
module.exports = __toCommonJS(list_users_route_exports);

// src/utils/prisma.ts
var import_client = require("@prisma/client");
var db = new import_client.PrismaClient();
var prisma_default = db;

// src/functions/list-users.ts
async function listUsers() {
  const users = await prisma_default.user.findMany();
  return { users };
}

// src/routes/list-users-route.ts
var listUsersRoute = async (app) => {
  app.get("/users", async (request, reply) => {
    const users = await listUsers();
    return { users };
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  listUsersRoute
});
