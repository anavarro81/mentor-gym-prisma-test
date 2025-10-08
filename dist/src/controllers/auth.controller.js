"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.login = exports.register = void 0;
// Controlador de autenticación: gestiona el registro y login de usuarios
const authService = __importStar(require("../services/auth.service"));
const validators_1 = require("../utils/validators");
/**
 * Controlador para el registro de usuario.
 * - Valida los datos recibidos en el body.
 * - Si la validación falla, responde con error 400 y detalles.
 * - Si es correcto, llama al servicio para crear el usuario y responde con el usuario creado.
 */
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extrae los datos del body
        const userData = req.body;
        // Valida los datos de registro
        const validUser = (0, validators_1.validateRegister)(userData);
        if (!validUser.valid) {
            // Si la validación falla, responde con error y detalles
            res.status(400).json({ message: "Datos del usuario incorrectos", error: validUser.errors });
        }
        // Si la validación es correcta, crea el usuario
        const createdUser = yield authService.register(userData);
        console.log('Usuario creado ', createdUser);
        res.status(201).json({ createdUser });
    }
    catch (error) {
        next(error);
    }
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const LoginPayload = req.body;
    const validLogin = (0, validators_1.valdateLogin)(LoginPayload);
    if (!validLogin.valid) {
        res.status(400).json({ message: "Login incorrecto", error: validLogin.errors });
    }
    const user = yield authService.login(LoginPayload);
    res.status(200).json(user);
});
exports.login = login;
//# sourceMappingURL=auth.controller.js.map