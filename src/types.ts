
export interface TestAction {
  jwtIssuer: string;
  jwtSecret: string;
}


export interface IServiceConfig {
  useCustomSequence: boolean;
}

export interface CoreConfig {
  configObject?: any;
  enableObf?: boolean;
  obfPath?: string;
  openapiSpec?: Record<string, unknown>;
}
