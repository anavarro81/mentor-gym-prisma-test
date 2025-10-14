import Joi from "joi";
import { RegisterPayLoad, LoginPayload } from "../types/auth";
import prisma from "../config/bd";

export interface ValidationResult {
  valid: boolean;
  errors: { field: string; message: string }[];
}

export const isEmailRegistered = async (email: string): Promise<Boolean> => {
  const user = prisma.user.findUnique({ where: { email } });
  return !!user;
};

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "El email debe de ser una direccion de correo válida",
    "string.empty": "El email no puede estar vacio",
    "any.required": "El email es obligatorio",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,10}$"))
    .required()
    .messages({
      "string.pattern.base":
        "La contraseña debe tener entre 6 y 10 caracteres alfanuméricos",
      "string.empty": "La contraseña no puede estar vacía",
      "any.reqired": "La contraseña es obligatoria",
    }),
});

// register schema: sólo email, password, name
const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "El email debe ser una dirección de correo válida",
    "string.empty": "El email no puede estar vacío",
    "any.required": "El email es obligatorio",
  }),

  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,10}$")) // ajusta la regla a tu política
    .required()
    .messages({
      "string.pattern.base":
        "La contraseña debe tener entre 6 y 10 caracteres alfanuméricos",
      "string.empty": "La contraseña no puede estar vacía",
      "any.required": "La contraseña es obligatoria",
    }),

  name: Joi.string().min(3).max(50).required().messages({
    "string.empty": "El nombre es obligatorio",
    "string.min": "El nombre debe de tener al menos {#limit} caracteres",
    "string.max": "El nombre no debe de tener más de {#limit} caracteres",
    "any.required": "El nombre es obligatorio",
  }),
});

export const validateLogin = (payload: LoginPayload): ValidationResult => {
  const { error } = loginSchema.validate(payload, { abortEarly: false });

  
  
  if (error) {
    const errors = error.details.map((detail) => ({
      field: detail.context?.key || "unknown",
      message: detail.message,
    }));
    return { valid: false, errors };
  }

  const emailRegistered = isEmailRegistered(payload.email);

  if (!emailRegistered) {
    const errors: [{ field: string; message: string }] = [
      { field: "", message: "" },
    ];
    errors.push({ field: "email", message: "email ya registrado" });
    console.error("email ya registrado");

    return { valid: false, errors: errors };
  }

  return { valid: true, errors: [] };
};

export const validateRegister = (
  payload: RegisterPayLoad,
): ValidationResult => {
  const { error } = registerSchema.validate(payload, { abortEarly: false });

  if (!error) {
    return {
      valid: true,
      errors: [],
    };
  }

  const errors = error.details.map((detail) => ({
    field: detail.context?.key || "unknow",
    message: detail.message,
  }));

  return { valid: true, errors:[] };
};

export const valdateLogin = (payload: LoginPayload): ValidationResult => {
  const { error } = loginSchema.validate(payload, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => ({
      field: detail.context?.key || "unknown",
      message: detail.message,
    }));
  }

  if (!error) {
    return {
      valid: true,
      errors: [],
    };
  }

  return { valid: true, errors:[] };
};
