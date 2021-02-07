"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repositories = void 0;
const tslib_1 = require("tslib");
const role_repository_1 = require("./role.repository");
tslib_1.__exportStar(require("./role.repository"), exports);
exports.repositories = [
    role_repository_1.RoleRepository,
];
//# sourceMappingURL=index.js.map