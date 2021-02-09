import { Binding, Component, ControllerClass, ProviderMap } from '@loopback/core';
import { Class, Model, Repository } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { ReferenceObject, SecuritySchemeObject } from '@loopback/openapi-v3';
import { TestAction } from '.';
export declare class TestComponent implements Component {
    private readonly application;
    private readonly TestConfig?;
    constructor(application: RestApplication, TestConfig?: TestAction | undefined);
    providers?: ProviderMap;
    bindings?: Binding[];
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
    setupSequence(bindings: Binding[]): void;
}
export declare const OPERATION_SECURITY_SPEC: {
    HTTPBearer: never[];
}[];
export declare type SecuritySchemeObjects = {
    [securityScheme: string]: SecuritySchemeObject | ReferenceObject;
};
export declare const SECURITY_SCHEME_SPEC: SecuritySchemeObjects;
