import { Request, Response } from '@loopback/rest';
import { Options } from 'express-rate-limit';

export interface DataSourceConfig {
  name: string;
}

export interface TestAction {
  (request: Request, response: Response): Promise<void>;
}

export type TestOptions = Options & DataSourceConfig;

/**
 * Rate limit metadata interface for the method decorator
 */
export interface TestMetadata {
  enabled: boolean;
  options?: Options;
}
