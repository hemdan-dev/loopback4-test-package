"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test_METADATA_ACCESSOR = exports.TestSecurityBindings = void 0;
const core_1 = require("@loopback/core");
var TestSecurityBindings;
(function (TestSecurityBindings) {
    TestSecurityBindings.Test_SECURITY_ACTION = core_1.BindingKey.create('sf.security.Test.actions');
    TestSecurityBindings.METADATA = core_1.BindingKey.create('sf.security.Test.operationMetadata');
    TestSecurityBindings.CONFIG = core_1.BindingKey.create('sf.security.Test.config');
})(TestSecurityBindings = exports.TestSecurityBindings || (exports.TestSecurityBindings = {}));
exports.Test_METADATA_ACCESSOR = core_1.MetadataAccessor.create('sf.security.Test.operationMetadata.accessor');
//# sourceMappingURL=keys.js.map