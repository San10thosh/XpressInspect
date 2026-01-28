import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // <--- Points to the routes file we created earlier

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};