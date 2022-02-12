export interface ClientBaseUrlConfig {
    scheme: 'http' | 'https' | 'ws' | 'wss';
    hostname: string;
    port: number;
    prefix?: string;
    version?: string;
  }