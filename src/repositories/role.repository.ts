import { Getter, inject } from '@loopback/core';
import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Role } from '../models';

export class RoleRepository extends DefaultCrudRepository<
  Role,
  typeof Role.prototype.id
  > {
  constructor(
    @inject('datasources.testPackage') dataSource: juggler.DataSource,
  ) {
    super(Role, dataSource);
  }
}
