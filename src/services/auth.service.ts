import {IUser} from '../types/auth'
import {hashPassword} from '../utils/auth'
import {generateSign} from '../utils/jwt'
import bcrypt from 'bcrypt';
// import { PrismaClient } from '../../generated/prisma'
// import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient().$extends(withAccelerate())
import prisma  from '../config/bd'


export interface IUserInfo {
    email: string;
    user: string;
    token: string;
}

export const register = async (userData: Partial<IUser>) => {

    const {email, password, name} = userData

    try {

        if (!email) {
        throw new Error("El email no está informado");
        }

        const bdEmail = await prisma.user.findUnique({
            where: {
                email: email
            }
        })



        if (bdEmail) {
            throw new Error("El email ya está en uso");        
        }

        if (!password) {
            throw new Error("La password no está informada"); 
        }

        if (!name) {
            throw new Error("El nombre no está informado"); 
        }



        const hashedPassword = await hashPassword(password)

        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password_hash: hashedPassword
        },
        })

        return user
        
        
    } catch (error) {
        console.log('error al registrar el usuario ', error)
    }



}