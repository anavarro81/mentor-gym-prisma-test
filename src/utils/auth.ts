import bcrypt from "bcrypt";

/**
 * Hashea una contraseña usando bcrypt.
 * - Genera un salt aleatorio con 10 rondas.
 * - Devuelve la contraseña cifrada lista para almacenar en base de datos.
 * @param password Contraseña en texto plano
 * @returns Contraseña cifrada
 */

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
):Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
