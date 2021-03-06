"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestSecurityBindings = void 0;
const core_1 = require("@loopback/core");
var TestSecurityBindings;
(function (TestSecurityBindings) {
    TestSecurityBindings.Config = core_1.BindingKey.create('test.security.config');
    TestSecurityBindings.config = core_1.BindingKey.create('sf.packages.core.config');
    TestSecurityBindings.EXPRESS_MIDDLEWARES = core_1.BindingKey.create(`sf.packages.core.expressMiddlewares`);
})(TestSecurityBindings = exports.TestSecurityBindings || (exports.TestSecurityBindings = {}));
//# sourceMappingURL=keys.js.map