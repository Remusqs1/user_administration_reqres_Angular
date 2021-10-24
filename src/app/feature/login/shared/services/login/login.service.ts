import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginIn } from '../../LoginIn';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  /**
  * El nombre de este metodo no debería ser cambiado, pero de ser necesario podrías cambiar la firma
   * */
  public login(input : LoginIn): Observable<any>{
    return this.http.post("https://reqres.in/api/login", input);
  }

}
