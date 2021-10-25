import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * El nombre de las clases o métodos no se pueden cambiar
 * */
@Injectable({
  providedIn: 'root',
})
export class UsersService {

  token :string;
  headers :Headers;
  constructor(private http: HttpClient){
    
  }
  
  getUsers(page:number, perPage: number): Observable<any>{
    return this.http.get("https://reqres.in/api/users?page="+page+"&per_page="+perPage);
  }

  createUser(input : any): Observable<any> {

    this.token =localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json',
      'CustomHeader' : "CustomSomething"
    })
    return this.http.post("https://reqres.in/api/users", input, {
      headers: headers
    });
  }

  deleteUserForIndex(index: number) {
    return this.http.delete("https://reqres.in/api/users/"+index);
  }

}
