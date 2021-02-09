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
import { RestApplication } from '@loopback/rest';
import {
  RoleController,
} from './controllers';
import { TestSecurityBindings } from './keys';
import {
  Role,
} from './models';
import {
  RoleRepository,
} from './repositories';
import { ReferenceObject, SecuritySchemeObject } from '@loopback/openapi-v3';
import { MySequence } from './sequence';
import { TestAction } from '.';
//import {ValidatorService, CalendarEventService} from './services';

export class TestComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private readonly application: RestApplication,
    @inject(TestSecurityBindings.Config, { optional: true })
    private readonly TestConfig?: TestAction,
  ) {
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

    this.repositories = [
      RoleRepository,
    ];

    this.models = [
      Role,
    ];

    this.providers = {};

    this.controllers = [
      RoleController,
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
