// Controlador de autenticación: gestiona el registro y login de usuarios
import * as authService from "../services/auth.service";
import { Request, Response, NextFunction } from "express";
import { validateRegister, validateLogin } from "../utils/validators";

/**
 * Controlador para el registro de usuario.
 * - Valida los datos recibidos en el body.
 * - Si la validación falla, responde con error 400 y detalles.
 * - Si es correcto, llama al servicio para crear el usuario y responde con el usuario creado.
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // Extrae los datos del body
    const userData = req.body;
    // Valida los datos de registro
    const validUser = validateRegister(userData);

    if (!validUser.valid) {
      // Si la validación falla, responde con error y detalles
      res.status(400).json({
        message: "Datos del usuario incorrectos",
        error: validUser.errors,
      });
      return;
    }
    // Si la validación es correcta, crea el usuario
    const createdUser = await authService.register(userData);
    console.log("Usuario creado ", createdUser);
    res.status(201).json({ createdUser });
  } catch (error: any) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const LoginPayload = req.body;

  const validLogin = validateLogin(LoginPayload);

  console.log('validLogin > ', validLogin)

  if (!validLogin.valid) {
    res
      .status(400)
      .json({ message: "Login incorrecto", error: validLogin.errors });
    return;
  }

  try {
    const user = await authService.login(LoginPayload);  
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({message: error.message})
  }
  

  
};
