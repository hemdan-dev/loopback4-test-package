import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Role, RoleWithRelations } from '../models';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id, RoleWithRelations> {
    constructor(dataSource: juggler.DataSource);
}
