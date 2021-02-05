"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestActionProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const Test = tslib_1.__importStar(require("express-rate-limit"));
const RedisStore = tslib_1.__importStar(require("rate-limit-redis"));
const keys_1 = require("../keys");
let TestActionProvider = class TestActionProvider {
    constructor(getMetadata, application, config) {
        this.getMetadata = getMetadata;
        this.application = application;
        this.config = config;
    }
    value() {
        return (req, resp) => this.action(req, resp);
    }
    async action(request, response) {
        console.log("hello from test-action", request, response);
        const metadata = await this.getMetadata();
        if (metadata && !metadata.enabled) {
            return Promise.resolve();
        }
        // For redis datasource
        let redisDS;
        if (this.config) {
            redisDS = (await this.application.get(`datasources.${this.config.name}`));
        }
        // Perform rate limiting now
        const promise = new Promise((resolve, reject) => {
            var _a, _b;
            // First check if rate limit options available at method level
            const operationMetadata = metadata ? metadata.options : {};
            // Create options based on global config and method level config
            const opts = Object.assign({}, this.config, operationMetadata);
            if (redisDS === null || redisDS === void 0 ? void 0 : redisDS.connector) {
                opts.store = new RedisStore.default({
                    client: redisDS.connector._client,
                });
            }
            opts.message = new rest_1.HttpErrors.TooManyRequests((_b = (_a = opts.message) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : 'Method rate limit reached !');
            const limiter = Test.default(opts);
            limiter(request, response, (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
        await promise;
    }
};
TestActionProvider = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject.getter(keys_1.TestSecurityBindings.METADATA)),
    tslib_1.__param(1, core_1.inject(core_1.CoreBindings.APPLICATION_INSTANCE)),
    tslib_1.__param(2, core_1.inject(keys_1.TestSecurityBindings.CONFIG, {
        optional: true,
    })),
    tslib_1.__metadata("design:paramtypes", [Function, rest_1.RestApplication, Object])
], TestActionProvider);
exports.TestActionProvider = TestActionProvider;
//# sourceMappingURL=test-action.provider.js.map