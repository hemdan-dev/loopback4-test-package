import { Entity } from '@loopback/repository';
export declare class RoleTest extends Entity {
    id?: string;
    name: string;
    permissions: string[];
    constructor(data?: Partial<RoleTest>);
}
export declare type RoleTestWithRelations = RoleTest;
