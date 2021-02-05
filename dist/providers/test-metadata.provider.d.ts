import { Constructor, Provider } from '@loopback/context';
import { TestMetadata } from '../types';
export declare class TestMetadataProvider implements Provider<TestMetadata | undefined> {
    private readonly controllerClass;
    private readonly methodName;
    constructor(controllerClass: Constructor<{}>, methodName: string);
    value(): TestMetadata | undefined;
}
export declare function getTestMetadata(controllerClass: Constructor<{}>, methodName: string): TestMetadata | undefined;
