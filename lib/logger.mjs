import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf, colorize } = format;

const logger = createLogger({
  format: combine(
    colorize({ all: true }),
    label({ label: 'Wetty' }),
    timestamp(),
    printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`),
  ),
  transports: [new transports.Console({ handleExceptions: true })],
});

export default logger;
