import { environment } from '../../../environments/environment';

export class AppConfig {
  static readonly API_SERVER: string = environment.urlBase;
}
