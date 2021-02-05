import { BindingKey, MetadataAccessor } from '@loopback/core';
import { TestAction, TestOptions, TestMetadata } from './types';
export declare namespace TestSecurityBindings {
    const Test_SECURITY_ACTION: BindingKey<TestAction>;
    const METADATA: BindingKey<TestMetadata | undefined>;
    const CONFIG: BindingKey<TestOptions | null>;
}
export declare const Test_METADATA_ACCESSOR: MetadataAccessor<TestMetadata, MethodDecorator>;
