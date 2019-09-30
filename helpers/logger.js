const fs = require('fs');
const path = require('path');
const { createLogger, format, transports } = require('winston');
const loggerConfig = require('config').logger

const logDir = loggerConfig.dirPath;
if (!fs.existsSync(logDir)){
    fs.mkdirSync(logDir); //sync function during startup
}

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ 
        filename: path.join(logDir, 'error.log'), 
        level: 'error',
        maxsize: 100000 //100 KB
    }),
    new transports.File({ 
        filename: path.join(logDir, 'info.log'), 
        maxsize: 100000 //100 KB
    })
  ],
  exceptionHandlers: [
    new transports.File({ 
      filename: path.join(logDir, 'exceptions.log')
    })
  ]
});

// If we're not in production then log to the `console`
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({ all: true }),
      format.simple()
    )
  }));
}

module.exports = logger;