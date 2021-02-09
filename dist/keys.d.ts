import { BindingKey } from "@loopback/core";
import { ExpressRequestHandler } from "@loopback/rest";
import { CoreConfig, TestAction } from ".";
export declare namespace TestSecurityBindings {
    const Config: BindingKey<TestAction | null>;
    const config: BindingKey<CoreConfig>;
    const EXPRESS_MIDDLEWARES: BindingKey<ExpressRequestHandler[]>;
}
