"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
function Test(enabled, options) {
    return core_1.MethodDecoratorFactory.createDecorator(keys_1.Test_METADATA_ACCESSOR, {
        enabled: enabled,
        options,
    });
}
exports.Test = Test;
//# sourceMappingURL=test.decorator.js.map