# Authress Angular
This package only contains a module for easy setup and registration of the Authress LoginClient
For details about the Authress Login SDK. See https://authress.io.

## Install

```sh
npm install @mikepattyn/authress-angular
```

## Setup in AppModule
```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    // Other imports
    AuthressModule.forRoot({
      authressApiUrl: environment.authressLoginUrl,
      applicationId: environment.authressAppId,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
