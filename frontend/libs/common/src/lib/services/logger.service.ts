import {
  INGXLoggerMonitor,
  INGXLoggerMetadata,
  INGXLoggerConfig,
} from 'ngx-logger';

export class LoggerSerivce implements INGXLoggerMonitor {
  onLog(logObject: INGXLoggerMetadata, config: INGXLoggerConfig) {
    console.log('myCustomLoggerMonitor', logObject);
  }
}
