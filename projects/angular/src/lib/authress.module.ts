import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoginClient, Settings } from '@authress/login';

@NgModule()
export class AuthressModule {
  static forRoot(config: Settings): ModuleWithProviders<AuthressModule> {
    return {
      ngModule: AuthressModule,
      providers: [
        {
          provide: AuthressClient,
          useFactory: () => new AuthressClient(config),
        },
      ],
    };
  }
}

export class AuthressClient extends LoginClient { }
