import { CoreBindings, inject, Provider } from '@loopback/core';
import { Getter, juggler } from '@loopback/repository';
import { Request, Response, RestApplication, HttpErrors } from '@loopback/rest';
import * as Test from 'express-rate-limit';
import * as RedisStore from 'rate-limit-redis';

import { TestSecurityBindings } from '../keys';
import { TestAction, TestMetadata, TestOptions } from '../types';

export class TestActionProvider implements Provider<TestAction> {
  constructor(
    @inject.getter(TestSecurityBindings.METADATA)
    private readonly getMetadata: Getter<TestMetadata>,
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private readonly application: RestApplication,
    @inject(TestSecurityBindings.CONFIG, {
      optional: true,
    })
    private readonly config?: TestOptions,
  ) { }

  value(): TestAction {
    return (req, resp) => this.action(req, resp);
  }

  async action(request: Request, response: Response): Promise<void> {
    console.log("hello from test-action", request, response)
    const metadata: TestMetadata = await this.getMetadata();

    if (metadata && !metadata.enabled) {
      return Promise.resolve();
    }

    // For redis datasource
    let redisDS: juggler.DataSource;
    if (this.config) {
      redisDS = (await this.application.get(
        `datasources.${this.config.name}`,
      )) as juggler.DataSource;
    }

    // Perform rate limiting now
    const promise = new Promise<void>((resolve, reject) => {
      // First check if rate limit options available at method level
      const operationMetadata = metadata ? metadata.options : {};

      // Create options based on global config and method level config
      const opts = Object.assign({}, this.config, operationMetadata);

      if (redisDS?.connector) {
        opts.store = new RedisStore.default({
          client: redisDS.connector._client,
        });
      }

      opts.message = new HttpErrors.TooManyRequests(
        opts.message?.toString() ?? 'Method rate limit reached !',
      );

      const limiter = Test.default(opts);
      limiter(request, response, (err: unknown) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
    await promise;
  }
}
