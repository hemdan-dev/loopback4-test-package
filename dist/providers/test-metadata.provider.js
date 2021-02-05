"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestMetadata = exports.TestMetadataProvider = void 0;
const tslib_1 = require("tslib");
const context_1 = require("@loopback/context");
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
let TestMetadataProvider = class TestMetadataProvider {
    constructor(controllerClass, methodName) {
        this.controllerClass = controllerClass;
        this.methodName = methodName;
    }
    value() {
        console.log("hello from test-meta");
        if (!this.controllerClass || !this.methodName)
            return;
        return getTestMetadata(this.controllerClass, this.methodName);
    }
};
TestMetadataProvider = tslib_1.__decorate([
    tslib_1.__param(0, context_1.inject(core_1.CoreBindings.CONTROLLER_CLASS, { optional: true })),
    tslib_1.__param(1, context_1.inject(core_1.CoreBindings.CONTROLLER_METHOD_NAME, { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object, String])
], TestMetadataProvider);
exports.TestMetadataProvider = TestMetadataProvider;
function getTestMetadata(controllerClass, methodName) {
    return context_1.MetadataInspector.getMethodMetadata(keys_1.Test_METADATA_ACCESSOR, controllerClass.prototype, methodName);
}
exports.getTestMetadata = getTestMetadata;
//# sourceMappingURL=test-metadata.provider.js.map