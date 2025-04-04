import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} : [${label}] : ${level} : ${message}`;
});

const logger = createLogger({
    format: combine(
        label({ label: 'right meow!' }),
        timestamp({ format: 'YYYY-MM-DD HH:MM:SS' }),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ]
});

export { logger } 