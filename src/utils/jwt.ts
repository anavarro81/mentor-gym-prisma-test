import jwt from "jsonwebtoken";

// Crea una interfaz personalizado a partir JwtPayload y le agrego el id de usuario
export interface myJwtPayload extends jwt.JwtPayload {
  id: string;
}

export const generateSign = (id: string, email: string) => {
  if (!process.env.JWT_KEY) {
    throw new Error("Clave para JWT no informada");
  }
  return jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: "1h" });
};

export const verifySign = (token: string): string | jwt.JwtPayload => {
  if (!process.env.JWT_KEY) {
    throw new Error("Clave para JWT no informada");
  }

  // Aserción de tipo. Le dice a TS que trate el valor que me devuelve jwt.verify como si fuera un objeto con la forma de MyJwtPayload
  const payload = jwt.verify(token, process.env.JWT_KEY) as myJwtPayload;

  // Devuelve el id del usuario.
  return payload.id;
};
