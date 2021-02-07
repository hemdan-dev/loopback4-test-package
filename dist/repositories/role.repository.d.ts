import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Role } from '../models';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id> {
    constructor(dataSource: juggler.DataSource);
}
