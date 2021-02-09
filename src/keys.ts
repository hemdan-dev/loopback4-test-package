import { BindingKey } from "@loopback/core";
import { TestAction } from ".";

export namespace TestSecurityBindings {
  export const Config = BindingKey.create<TestAction | null>(
    'test.security.config',
  );
}
