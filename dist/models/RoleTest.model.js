"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTest = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let RoleTest = class RoleTest extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    tslib_1.__metadata("design:type", String)
], RoleTest.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], RoleTest.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    tslib_1.__metadata("design:type", Array)
], RoleTest.prototype, "permissions", void 0);
RoleTest = tslib_1.__decorate([
    repository_1.model({
        name: 'test_roles',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], RoleTest);
exports.RoleTest = RoleTest;
//# sourceMappingURL=RoleTest.model.js.map