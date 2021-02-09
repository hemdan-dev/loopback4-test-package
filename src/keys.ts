import { BindingKey } from "@loopback/core";
import { ExpressRequestHandler } from "@loopback/rest";
import { CoreConfig, TestAction } from ".";

export namespace TestSecurityBindings {
  export const Config = BindingKey.create<TestAction | null>(
    'test.security.config',
  );

  export const config = BindingKey.create<CoreConfig>(
    'sf.packages.core.config',
  );

  export const EXPRESS_MIDDLEWARES = BindingKey.create<ExpressRequestHandler[]>(
    `sf.packages.core.expressMiddlewares`,
  );
}
