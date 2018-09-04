import { ProviderRegistrationModule } from './provider-registration.module';

describe('ProviderRegistrationModule', () => {
  let providerRegistrationModule: ProviderRegistrationModule;

  beforeEach(() => {
    providerRegistrationModule = new ProviderRegistrationModule();
  });

  it('should create an instance', () => {
    expect(providerRegistrationModule).toBeTruthy();
  });
});
