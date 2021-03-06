"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTestRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let RoleTestRepository = class RoleTestRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.RoleTest, dataSource);
    }
};
RoleTestRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.testPackage')),
    tslib_1.__metadata("design:paramtypes", [repository_1.juggler.DataSource])
], RoleTestRepository);
exports.RoleTestRepository = RoleTestRepository;
//# sourceMappingURL=RoleTest.repository.js.map