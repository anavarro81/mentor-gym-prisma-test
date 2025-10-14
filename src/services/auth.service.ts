import { IUser, LoginPayload } from "../types/auth";
import { hashPassword, comparePassword } from "../utils/auth";
import { generateSign } from "../utils/jwt";
import bcrypt from "bcrypt";
// import { PrismaClient } from '../../generated/prisma'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient().$extends(withAccelerate())
import prisma from "../config/bd";

export interface IUserInfo {
  email: string;
  user: string;
  token: string;
}

export const register = async (userData: IUser) => {
  const { email, password, name } = userData;

  try {
    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password_hash: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    console.error("error al registrar el usuario ", error);
    throw new Error('"error al registrar el usuario ", error');
  }
};

export const login = async (userData: LoginPayload) => {
  // Comprobar si existe el correo
  
  try {

  const result = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

    if (!result) {
    throw new Error("Email no encontado");
  }

  const validLogin = await comparePassword(result.password_hash, userData.password);

    if (!validLogin) {
    throw new Error("Email o contraseña incorrecta");
  }

    const token = generateSign(String(result.id), result.email);

  console.log("token ", token);

  return {
    id: result.id,
    email: result.email,
    token: token,
  };


    
  } catch (error) {
    console.error('Error en el login ', error)
    throw new Error("Email o contraseña incorrecta");
    
  }

  


  

  



};
