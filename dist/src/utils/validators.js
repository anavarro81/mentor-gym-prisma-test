"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valdateLogin = exports.validateRegister = exports.validateLogin = void 0;
const joi_1 = __importDefault(require("joi"));
const loginSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        'string.email': 'El email debe de ser una direccion de correo válida',
        'string.empty': 'El email no puede estar vacio',
        'any.required': 'El email es obligatorio'
    }),
    password: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,10}$'))
        .required()
        .messages({
        'string.pattern.base': 'La contraseña debe tener entre 6 y 10 caracteres alfanuméricos',
        'string.empty': 'La contraseña no puede estar vacía',
        'any.reqired': 'La contraseña es obligatoria'
    })
});
// register schema: sólo email, password, name
const registerSchema = joi_1.default.object({
    email: joi_1.default.string()
        .email()
        .required()
        .messages({
        'string.email': 'El email debe ser una dirección de correo válida',
        'string.empty': 'El email no puede estar vacío',
        'any.required': 'El email es obligatorio'
    }),
    password: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,10}$')) // ajusta la regla a tu política
        .required()
        .messages({
        'string.pattern.base': 'La contraseña debe tener entre 6 y 10 caracteres alfanuméricos',
        'string.empty': 'La contraseña no puede estar vacía',
        'any.required': 'La contraseña es obligatoria'
    }),
    name: joi_1.default.string()
        .min(3)
        .max(50)
        .required()
        .messages({
        'string.empty': 'El nombre es obligatorio',
        'string.min': 'El nombre debe de tener al menos {#limit} caracteres',
        'string.max': 'El nombre no debe de tener más de {#limit} caracteres',
        'any.required': 'El nombre es obligatorio'
    })
});
const validateLogin = (payload) => {
    const { error } = loginSchema.validate(payload, { abortEarly: false });
    if (!error) {
        return { valid: true, errors: [] };
    }
    const errors = error.details.map(detail => {
        var _a;
        return ({
            field: ((_a = detail.context) === null || _a === void 0 ? void 0 : _a.key) || 'unknow',
            message: detail.message
        });
    });
    return { valid: false, errors };
};
exports.validateLogin = validateLogin;
const validateRegister = (payload) => {
    const { error } = registerSchema.validate(payload, { abortEarly: false });
    if (!error) {
        return {
            valid: true,
            errors: []
        };
    }
    const errors = error.details.map(detail => {
        var _a;
        return ({
            field: ((_a = detail.context) === null || _a === void 0 ? void 0 : _a.key) || 'unknow',
            message: detail.message
        });
    });
    return { valid: false, errors };
};
exports.validateRegister = validateRegister;
const valdateLogin = (payload) => {
    const { error } = loginSchema.validate(payload, { abortEarly: false });
    if (!error) {
        return {
            valid: true,
            errors: []
        };
    }
    const errors = error.details.map(detail => {
        var _a;
        return ({
            field: ((_a = detail.context) === null || _a === void 0 ? void 0 : _a.key) || 'unknow',
            message: detail.message
        });
    });
    return { valid: false, errors };
};
exports.valdateLogin = valdateLogin;
//# sourceMappingURL=validators.js.map