import {PrismaClient} from './generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

// Crea estanncia del Cliente de Prisma y le agrega
// la extension Accelerate. 
const prisma = new PrismaClient().$extends(withAccelerate())


async function main() {       

    await prisma.user.create({
        data: {
            email: "juan.perez@example.com",
            password_hash: "$2b$10$eH1cG2bL6M9q5Tx3qJshVuSg3oFmPOaVxEn9LmkF3PjC9ZzFz6D5u",    
            name: "Juan Pérez",
            profile_picture_url: "https://randomuser.me/api/portraits/men/32.jpg",
            status: "pending"
        }
    })

	const allUsers = await prisma.user.findMany()
    console.log(allUsers)
}

main()
    .then ( async () => {
        await prisma.$disconnect()
    })
    .catch (async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


