export interface LoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  name: string;
  password: string;
  profile_picture_url?: string;
  status: string;
}

export interface RegisterPayLoad {
  name: string;
  rol: string;
  password: string;
  email: string;
}

export interface RegisterCoachPayload extends IUser {
  rol: "coach";
  specialty: string;
  description: string;
}

export interface RegisterAtheletePayload extends IUser {
  rol: "athlete";
  birthday: Date;
  height: number;
  weight: number;
  unit: string;
  Coach_id: string;
  Connection_status: string;
}
