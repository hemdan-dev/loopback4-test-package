/// <reference types="express" />
import { Provider } from '@loopback/core';
import { Getter } from '@loopback/repository';
import { Request, Response, RestApplication } from '@loopback/rest';
import { TestAction, TestMetadata, TestOptions } from '../types';
export declare class TestActionProvider implements Provider<TestAction> {
    private readonly getMetadata;
    private readonly application;
    private readonly config?;
    constructor(getMetadata: Getter<TestMetadata>, application: RestApplication, config?: TestOptions | undefined);
    value(): TestAction;
    action(request: Request, response: Response): Promise<void>;
}
