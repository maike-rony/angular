import { Injectable } from '@angular/core';
import { AppConfig } from '../helpers/app.config';
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private readonly keyPublic: string = AppConfig.API_KEY_PUBLIC;
  private readonly keyPrivate: string = AppConfig.API_KEY_PRIVATE;
  private readonly ts: string = '1';

  private generatorHashMarvel(): string {
    const hash = CryptoJS.MD5(this.ts + this.keyPrivate + this.keyPublic);
    return hash.toString(CryptoJS.enc.Hex)
  }

  public generatorUrl(): string {
    return `?ts=${this.ts}&apikey=${this.keyPublic}&hash=${this.generatorHashMarvel()}`
  }

}
