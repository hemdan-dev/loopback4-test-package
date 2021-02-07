"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestComponent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const controllers_1 = require("./controllers");
const keys_1 = require("./keys");
const models_1 = require("./models");
const providers_1 = require("./providers");
const repositories_1 = require("./repositories");
let TestComponent = class TestComponent {
    constructor(application) {
        this.application = application;
        this.bindings = [];
        this.providers = {
            [keys_1.TestSecurityBindings.Test_SECURITY_ACTION
                .key]: providers_1.TestActionProvider,
            [keys_1.TestSecurityBindings.METADATA.key]: providers_1.TestMetadataProvider,
        };
        this.bindings.push(core_1.Binding.bind(keys_1.TestSecurityBindings.CONFIG.key).to(null));
        this.repositories = repositories_1.repositories;
        this.models = models_1.models;
        this.controllers = controllers_1.controllers;
    }
};
TestComponent = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__metadata("design:paramtypes", [rest_1.RestApplication])
], TestComponent);
exports.TestComponent = TestComponent;
//# sourceMappingURL=component.js.map