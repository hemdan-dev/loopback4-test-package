"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECURITY_SCHEME_SPEC = exports.OPERATION_SECURITY_SPEC = exports.TestComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const controllers_1 = require("./controllers");
const keys_1 = require("./keys");
const models_1 = require("./models");
const repositories_1 = require("./repositories");
const sequence_1 = require("./sequence");
//import {ValidatorService, CalendarEventService} from './services';
let TestComponent = class TestComponent {
    constructor(application, coreConfig, expressMiddlewares) {
        this.application = application;
        this.coreConfig = coreConfig;
        this.expressMiddlewares = expressMiddlewares;
        this.providers = {};
        this.bindings = [];
        const middlewares = [];
        this.application.bind(keys_1.TestSecurityBindings.EXPRESS_MIDDLEWARES).to(middlewares);
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
                securitySchemes: exports.SECURITY_SCHEME_SPEC,
            },
            servers: [{ url: '/' }],
        });
        /*if (!this.schedulerConfig?.useCustomSequence) {
          // Mount default sequence if needed
          this.setupSequence(this.bindings);
        }*/
        this.setupSequence(this.bindings);
        this.repositories = [
            repositories_1.RoleTestRepository,
        ];
        this.models = [
            models_1.RoleTest,
        ];
        this.providers = {};
        this.controllers = [
            controllers_1.RoleTestController,
        ];
    }
    /**
     * Setup ServiceSequence by default if no other sequnce provided
     *
     * @param bindings Binding array
     */
    setupSequence(bindings) {
        this.application.sequence(sequence_1.MySequence);
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
};
TestComponent = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__param(1, core_1.inject(keys_1.TestSecurityBindings.config, { optional: true })),
    tslib_1.__param(2, core_1.inject(keys_1.TestSecurityBindings.EXPRESS_MIDDLEWARES, { optional: true })),
    tslib_1.__metadata("design:paramtypes", [rest_1.RestApplication, Object, Array])
], TestComponent);
exports.TestComponent = TestComponent;
exports.OPERATION_SECURITY_SPEC = [{ HTTPBearer: [] }];
exports.SECURITY_SCHEME_SPEC = {
    HTTPBearer: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    },
};
//# sourceMappingURL=component.js.map