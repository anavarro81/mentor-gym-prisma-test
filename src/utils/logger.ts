import winston from "winston";
import path from "path"

// niveles de logs. 
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3, 
    debug: 4,
};

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta", 
    debug: "white",

};

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
    winston.format.colorize({all: true}),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    ),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: path.join('logs', 'error', 'error.log'),
        level: 'error',
        format: winston.format.combine(
            winston.format.uncolorize(),
            winston.format.json()
        ),     
    }),
    new winston.transports.File({
        filename: path.join('logs', 'combined', 'combined.log'),        
        format: winston.format.combine(
            winston.format.uncolorize(),
            winston.format.json()
        ),     
    }),
    new winston.transports.File({
        filename: path.join('logs', 'audit', 'audit.log'),
        level:'info',         
        format: winston.format.combine(
            winston.format.uncolorize(),
            winston.format.json()
        ),     
    }),
];

const logger = winston.createLogger({
    
    level: process.env.LOG_LEVEL || "DEBUG",
    levels, 
    format,
    transports,

});

export const auditLogger = winston.createLogger({
    level: "info",
    levels, 
    format: winston.format.combine(
            winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss:ms'}),
            winston.format.json()), 
    transports: [
        new winston.transports.File({
            filename: path.join('logs', 'audit', 'audit.log'),   
        }),      
    ],
});

export default logger; 




