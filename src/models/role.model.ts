import { Entity, model, property } from '@loopback/repository';

@model({
  name: 'test_roles',
})
export class Role extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  permissions: string[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}
export type RoleWithRelations = Role;
