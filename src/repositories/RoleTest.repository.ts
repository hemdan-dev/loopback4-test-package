import { Getter, inject } from '@loopback/core';
import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { RoleTest, RoleTestWithRelations } from '../models';

export class RoleTestRepository extends DefaultCrudRepository<
  RoleTest,
  typeof RoleTest.prototype.id,
  RoleTestWithRelations
  > {
  constructor(
    @inject('datasources.testPackage') dataSource: juggler.DataSource,
  ) {
    super(RoleTest, dataSource);
  }
}
