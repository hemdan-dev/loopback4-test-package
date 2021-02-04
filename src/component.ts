import { Binding, Component, ProviderMap } from '@loopback/core';

import { TestSecurityBindings } from './keys';
import { TestActionProvider, TestMetadataProvider } from './providers';

export class TestComponent implements Component {
  constructor() {
    this.providers = {
      [TestSecurityBindings.Test_SECURITY_ACTION
        .key]: TestActionProvider,
      [TestSecurityBindings.METADATA.key]: TestMetadataProvider,
    };
    this.bindings.push(
      Binding.bind(TestSecurityBindings.CONFIG.key).to(null),
    );
  }

  providers?: ProviderMap;
  bindings: Binding[] = [];
}
