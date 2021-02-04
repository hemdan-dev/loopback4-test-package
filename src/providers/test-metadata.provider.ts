import {
  Constructor,
  inject,
  MetadataInspector,
  Provider,
} from '@loopback/context';
import { CoreBindings } from '@loopback/core';
import { TestMetadata } from '../types';
import { Test_METADATA_ACCESSOR } from '../keys';

export class TestMetadataProvider
  implements Provider<TestMetadata | undefined> {
  constructor(
    @inject(CoreBindings.CONTROLLER_CLASS, { optional: true })
    private readonly controllerClass: Constructor<{}>,
    @inject(CoreBindings.CONTROLLER_METHOD_NAME, { optional: true })
    private readonly methodName: string,
  ) { }

  value(): TestMetadata | undefined {
    console.log("hello from test-meta")
    if (!this.controllerClass || !this.methodName) return;
    return getTestMetadata(this.controllerClass, this.methodName);
  }
}

export function getTestMetadata(
  controllerClass: Constructor<{}>,
  methodName: string,
): TestMetadata | undefined {
  return MetadataInspector.getMethodMetadata<TestMetadata>(
    Test_METADATA_ACCESSOR,
    controllerClass.prototype,
    methodName,
  );
}
