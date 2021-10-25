import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient){}
  
  getUsers(): Observable<any>{
    return this.http.get("https://reqres.in/api/users");
  }

  createUser() {

  }

  deleteUserForIndex(index: number) {
    return this.http.delete("https://reqres.in/api/users/"+index);
  }
}
