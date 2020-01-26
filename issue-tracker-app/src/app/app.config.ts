import { IAppConfig } from './common/config.service';


const baseUrl = `${location.protocol}//${location.host}`;

const apiUrl = baseUrl + '/api/';

interface IConfig extends IAppConfig {
    apiUrl: string;
}

export const AppConfig: IConfig = {
    apiUrl: apiUrl
};