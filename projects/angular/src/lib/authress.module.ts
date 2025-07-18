import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { LoginClient, Settings } from '@authress/login';

export const LOGIN_CLIENT = new InjectionToken<LoginClient>("LoginClient");
@NgModule()
export class AuthressModule {
  static forRoot(config: Settings): ModuleWithProviders<AuthressModule> {
    return {
      ngModule: AuthressModule,
      providers: [
        {
          provide: LOGIN_CLIENT,
          useFactory: () => {
            return new LoginClient(config);
          },
        },
        // Also provide it as the original LoginClient for backward compatibility
        {
          provide: LoginClient,
          useExisting: LOGIN_CLIENT,
        },
      ],
    };
  }
}
