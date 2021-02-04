import { BindingKey, MetadataAccessor } from '@loopback/core';

import { TestAction, TestOptions, TestMetadata } from './types';

export namespace TestSecurityBindings {
  export const Test_SECURITY_ACTION = BindingKey.create<TestAction>(
    'sf.security.Test.actions',
  );

  export const METADATA = BindingKey.create<TestMetadata | undefined>(
    'sf.security.Test.operationMetadata',
  );

  export const CONFIG = BindingKey.create<TestOptions | null>(
    'sf.security.Test.config',
  );
}

export const Test_METADATA_ACCESSOR = MetadataAccessor.create<
  TestMetadata,
  MethodDecorator
>('sf.security.Test.operationMetadata.accessor');
