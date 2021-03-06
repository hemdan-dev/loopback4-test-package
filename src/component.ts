import {
  Binding,
  Component,
  ControllerClass,
  CoreBindings,
  createServiceBinding,
  inject,
  ProviderMap,
} from '@loopback/core';
import { Class, Model, Repository } from '@loopback/repository';
import { ExpressRequestHandler, RestApplication } from '@loopback/rest';
import {
  RoleTestController,
} from './controllers';
import { TestSecurityBindings } from './keys';
import {
  RoleTest,
} from './models';
import {
  RoleTestRepository,
} from './repositories';
import { ReferenceObject, SecuritySchemeObject } from '@loopback/openapi-v3';
import { MySequence } from './sequence';
import { CoreConfig, TestAction } from '.';
//import {ValidatorService, CalendarEventService} from './services';

export class TestComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private readonly application: RestApplication,
    @inject(TestSecurityBindings.config, { optional: true })
    private readonly coreConfig: CoreConfig,
    @inject(TestSecurityBindings.EXPRESS_MIDDLEWARES, { optional: true })
    private readonly expressMiddlewares: ExpressRequestHandler[],
    /*@inject(TestSecurityBindings.Config, { optional: true })
    private readonly TestConfig?: TestAction,*/
  ) {
    const middlewares: any = [];
    this.application.bind(TestSecurityBindings.EXPRESS_MIDDLEWARES).to(middlewares);
    this.bindings = [
      /*createServiceBinding(ValidatorService),
      createServiceBinding(CalendarEventService),
      createServiceBinding(EventService),
      createServiceBinding(CalendarService),*/
    ];
    this.providers = {};

    // Mount core component
    //this.application.component(CoreComponent);

    this.application.api({
      openapi: '3.0.0',
      info: {
        title: 'Scheduler Service',
        version: '1.0.0',
      },
      paths: {},
      components: {
        securitySchemes: SECURITY_SCHEME_SPEC,
      },
      servers: [{ url: '/' }],
    });

    /*if (!this.schedulerConfig?.useCustomSequence) {
      // Mount default sequence if needed
      this.setupSequence(this.bindings);
    }*/

    this.setupSequence(this.bindings)

    this.repositories = [
      RoleTestRepository,
    ];

    this.models = [
      RoleTest,
    ];

    this.providers = {};

    this.controllers = [
      RoleTestController,
    ];
  }

  providers?: ProviderMap = {};

  bindings?: Binding[] = [];

  /**
   * An optional list of Repository classes to bind for dependency injection
   * via `app.repository()` API.
   */
  repositories?: Class<Repository<Model>>[];

  /**
   * An optional list of Model classes to bind for dependency injection
   * via `app.model()` API.
   */
  models?: Class<Model>[];

  /**
   * An array of controller classes
   */
  controllers?: ControllerClass[];

  /**
   * Setup ServiceSequence by default if no other sequnce provided
   *
   * @param bindings Binding array
   */
  setupSequence(bindings: Binding[]) {
    this.application.sequence(MySequence);

    // Mount authentication component for default sequence
    /*this.application.component(AuthenticationComponent);
    // Mount bearer verifier component
    this.application.bind(BearerVerifierBindings.Config).to({
      authServiceUrl: '',
      type: BearerVerifierType.service,
    } as BearerVerifierConfig);
    this.application.component(BearerVerifierComponent);

    // Mount authorization component for default sequence
    this.application.bind(AuthorizationBindings.CONFIG).to({
      allowAlwaysPaths: ['/explorer'],
    });
    this.application.component(AuthorizationComponent);*/
  }
}

export const OPERATION_SECURITY_SPEC = [{ HTTPBearer: [] }];
export type SecuritySchemeObjects = {
  [securityScheme: string]: SecuritySchemeObject | ReferenceObject;
};
export const SECURITY_SCHEME_SPEC: SecuritySchemeObjects = {
  HTTPBearer: {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  },
};
