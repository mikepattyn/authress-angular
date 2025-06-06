import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginClient, Settings } from '@authress/login';

@NgModule()
export class AuthressModule {
  static forRoot(config: Settings): ModuleWithProviders<AuthressModule> {
    return {
      ngModule: AuthressModule,
      providers: [
        {
          provide: LoginClient,
          useFactory: () => new LoginClient(config),
        },
      ],
    };
  }
}
