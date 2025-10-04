import express from 'express';

// import settingRoute from './src/routes/setting.routes'



import authRoute from './src/routes/auth.routes'
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
import 'dotenv/config'
import cors from 'cors';
import {corsConfig} from './src/config/cors'

const app = express()



app.use(cors(corsConfig))

// Permite leer los datos que vienen de un formulario
app.use(express.json())

app.use((req, res, next) => {
    console.log('Middleware global: petición recibida en', req.method, req.url);
    next();
});

app.use('/auth/', authRoute)



app.use('/', (req, res) => {
    console.log('Middleware 404: No se encontró la ruta', req.method, req.url);
    res.status(404).json({message: 'La url solicitada no existe'})
})




export default app;