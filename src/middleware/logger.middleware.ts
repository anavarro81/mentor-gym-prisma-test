import  {Request, Response, NextFunction} from "express";

import logger from "../utils/logger";
import { date } from "joi";

export const requestLogger = (req: Request, res: Response, next: NextFunction):void => {
    
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const {method, originalUrl} = req;
        const {statusCode} = res;
        const loglevel = statusCode >= 400 ? "warn" : "http"
        logger.log(loglevel, `${method}: ${originalUrl} - ${statusCode} - ${duration} ms`);
    });
    next();
};

export const errorLogger = (error: Error, req: Request, res: Response, next: NextFunction):void => {
    logger.error('error no manejado: ', {
        message: error.message,
        stack: error.stack,
        url: req.originalUrl,
        method: req.method,
        ip: req.ip
    });
    next(error);
};

