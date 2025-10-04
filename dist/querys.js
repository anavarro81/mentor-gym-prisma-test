"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("./generated/prisma");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
// Crea estanncia del Cliente de Prisma y le agrega
// la extension Accelerate. 
const prisma = new prisma_1.PrismaClient().$extends((0, extension_accelerate_1.withAccelerate)());
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.user.create({
            data: {
                email: "juan.perez@example.com",
                password_hash: "$2b$10$eH1cG2bL6M9q5Tx3qJshVuSg3oFmPOaVxEn9LmkF3PjC9ZzFz6D5u",
                name: "Juan Pérez",
                profile_picture_url: "https://randomuser.me/api/portraits/men/32.jpg",
                status: "pending"
            }
        });
        const allUsers = yield prisma.user.findMany();
        console.log(allUsers);
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=querys.js.map