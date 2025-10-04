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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const auth_1 = require("../utils/auth");
// import { PrismaClient } from '../../generated/prisma'
// import { withAccelerate } from '@prisma/extension-accelerate'
// const prisma = new PrismaClient().$extends(withAccelerate())
const bd_1 = __importDefault(require("../config/bd"));
const register = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = userData;
    try {
        if (!email) {
            throw new Error("El email no está informado");
        }
        const bdEmail = yield bd_1.default.user.findUnique({
            where: {
                email: email
            }
        });
        if (bdEmail) {
            throw new Error("El email ya está en uso");
        }
        if (!password) {
            throw new Error("La password no está informada");
        }
        if (!name) {
            throw new Error("El nombre no está informado");
        }
        const hashedPassword = yield (0, auth_1.hashPassword)(password);
        const user = yield bd_1.default.user.create({
            data: {
                name: name,
                email: email,
                password_hash: hashedPassword
            },
        });
        return user;
    }
    catch (error) {
        console.log('error al registrar el usuario ', error);
    }
});
exports.register = register;
//# sourceMappingURL=auth.service.js.map