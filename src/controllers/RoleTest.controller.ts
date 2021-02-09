import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
} from '@loopback/rest';
import { RoleTest } from '../models';
import { RoleTestRepository } from '../repositories';

export class RoleTestController {
  constructor(
    @repository(RoleTestRepository)
    public roleRepository: RoleTestRepository,
  ) { }


  @get('/test_package', {
    responses: {
      '200': {
        description: 'Array of Role model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(RoleTest, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RoleTest)) filter?: Filter<RoleTest>,
  ): Promise<RoleTest[]> {
    return this.roleRepository.find(filter);
  }
}
