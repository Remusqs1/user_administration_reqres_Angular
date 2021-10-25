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
    this.token =localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json',
      'CustomHeader' : "CustomSomething2"
    })

    return this.http.get("https://reqres.in/api/users?page="+page+"&per_page="+perPage, {
      headers: headers
    });
  }

  createUser(input : any): Observable<any> {

    this.token =localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json',
      'CustomHeader' : "CustomSomething1"
    })
    return this.http.post("https://reqres.in/api/users", input, {
      headers: headers
    });
  }

  deleteUserForIndex(index: number) {
    this.token =localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': this.token,
      'Content-Type': 'application/json',
      'CustomHeader' : "CustomSomething3"
    })
    return this.http.delete("https://reqres.in/api/users/"+index, {
      headers: headers
    });
  }

}
