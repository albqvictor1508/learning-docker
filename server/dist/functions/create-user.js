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

// src/functions/create-user.ts
var create_user_exports = {};
__export(create_user_exports, {
  createUser: () => createUser
});
module.exports = __toCommonJS(create_user_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createUser
});
