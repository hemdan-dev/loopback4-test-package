import { Filter } from '@loopback/repository';
import { RoleTest } from '../models';
import { RoleTestRepository } from '../repositories';
export declare class RoleTestController {
    roleRepository: RoleTestRepository;
    constructor(roleRepository: RoleTestRepository);
    find(filter?: Filter<RoleTest>): Promise<RoleTest[]>;
}
