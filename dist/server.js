"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import settingRoute from './src/routes/setting.routes'
const auth_routes_1 = __importDefault(require("./src/routes/auth.routes"));
// Carga las variables de entorno. Se pueden usar en todo el proyecto. 
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./src/config/cors");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(cors_2.corsConfig));
// Permite leer los datos que vienen de un formulario
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log('Middleware global: petición recibida en', req.method, req.url);
    next();
});
app.use('/auth/', auth_routes_1.default);
app.use('/', (req, res) => {
    console.log('Middleware 404: No se encontró la ruta', req.method, req.url);
    res.status(404).json({ message: 'La url solicitada no existe' });
});
exports.default = app;
//# sourceMappingURL=server.js.map