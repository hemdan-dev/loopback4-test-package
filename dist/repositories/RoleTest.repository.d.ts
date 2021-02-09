import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { RoleTest, RoleTestWithRelations } from '../models';
export declare class RoleTestRepository extends DefaultCrudRepository<RoleTest, typeof RoleTest.prototype.id, RoleTestWithRelations> {
    constructor(dataSource: juggler.DataSource);
}
