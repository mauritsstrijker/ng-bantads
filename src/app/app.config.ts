import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

import { routes } from './app.routes';
import { tokenInterceptor } from './components/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    MessageService,
    ConfirmationService,
    provideHttpClient(withInterceptors([tokenInterceptor])),
    CurrencyPipe,
  ],
};
