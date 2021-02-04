import { MethodDecoratorFactory } from '@loopback/core';
import { TestMetadata } from '../types';
import { Options } from 'express-rate-limit';
import { Test_METADATA_ACCESSOR } from '../keys';

export function Test(enabled: boolean, options?: Options) {
  return MethodDecoratorFactory.createDecorator<TestMetadata>(
    Test_METADATA_ACCESSOR,
    {
      enabled: enabled,
      options,
    },
  );
}
