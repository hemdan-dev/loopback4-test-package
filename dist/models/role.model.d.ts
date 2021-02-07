import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    id?: string;
    name: string;
    permissions: string[];
    constructor(data?: Partial<Role>);
}
export declare type RoleWithRelations = Role;
