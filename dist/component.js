"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = void 0;
const core_1 = require("@loopback/core");
const keys_1 = require("./keys");
const providers_1 = require("./providers");
class TestComponent {
    constructor() {
        this.bindings = [];
        this.providers = {
            [keys_1.TestSecurityBindings.Test_SECURITY_ACTION
                .key]: providers_1.TestActionProvider,
            [keys_1.TestSecurityBindings.METADATA.key]: providers_1.TestMetadataProvider,
        };
        this.bindings.push(core_1.Binding.bind(keys_1.TestSecurityBindings.CONFIG.key).to(null));
    }
}
exports.TestComponent = TestComponent;
//# sourceMappingURL=component.js.map