import { Binding, Component, ControllerClass, CoreBindings, inject, ProviderMap } from '@loopback/core';
import { Class, Model, Repository } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import { controllers } from './controllers';

import { TestSecurityBindings } from './keys';
import { models } from './models';
import { TestActionProvider, TestMetadataProvider } from './providers';
import { repositories } from './repositories';

export class TestComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE) private readonly application: RestApplication,
  ) {
    this.providers = {
      [TestSecurityBindings.Test_SECURITY_ACTION
        .key]: TestActionProvider,
      [TestSecurityBindings.METADATA.key]: TestMetadataProvider,
    };
    this.bindings.push(
      Binding.bind(TestSecurityBindings.CONFIG.key).to(null),
    );

    this.repositories = repositories;

    this.models = models;

    this.controllers = controllers;
  }

  repositories?: Class<Repository<Model>>[];
  models?: any;//Class<Model>[];
  controllers?: ControllerClass[];
  providers?: ProviderMap;
  bindings: Binding[] = [];
}
