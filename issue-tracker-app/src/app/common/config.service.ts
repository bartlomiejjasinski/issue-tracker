import { InjectionToken } from '@angular/core';

export interface IAppConfig {
    apiUrl: string;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('app.config');