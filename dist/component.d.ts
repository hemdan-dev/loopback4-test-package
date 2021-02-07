import { Binding, Component, ControllerClass, ProviderMap } from '@loopback/core';
import { Class, Model, Repository } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
export declare class TestComponent implements Component {
    private readonly application;
    constructor(application: RestApplication);
    repositories?: Class<Repository<Model>>[];
    models?: any;
    controllers?: ControllerClass[];
    providers?: ProviderMap;
    bindings: Binding[];
}
