import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  /**
   * localstorageなどにtokenを保存しておいてあるかどうかで判断する
   */
  public isAuthenticate() {
    return of(true)
  }
  /**
   * 実際は通信する
   */
  public login() {
    return of(true)
  }
}
