import { ApplicationConfig } from '@angular/core';
import { ConsultantsService } from './services/consultants.service';

export const appConfig: ApplicationConfig = {
  providers: [
    ConsultantsService
  ]
};