"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTestController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RoleTestController = class RoleTestController {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async find(filter) {
        return this.roleRepository.find(filter);
    }
};
tslib_1.__decorate([
    rest_1.get('/test_package', {
        responses: {
            '200': {
                description: 'Array of Role model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.RoleTest, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.RoleTest))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleTestController.prototype, "find", null);
RoleTestController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RoleTestRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RoleTestRepository])
], RoleTestController);
exports.RoleTestController = RoleTestController;
//# sourceMappingURL=RoleTest.controller.js.map