import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Register} from "../model/User";

@Injectable()
export class AuthenticationService {

  protected baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  login(username: string, password: string){
    const url = `${this.baseUrl}/login?username=${username}&password=${password}`;
    return this.http.get<any>(url).pipe(
      map(() => {
        localStorage.setItem('currentUser', "loggedin");
        localStorage.setItem('username', username);
        return true;
      })
    )
  }

  register(registerUser: Register){
    const formData = new FormData();
    formData.append('profilePicture', registerUser.file);

    const url = `${this.baseUrl}/register?username=${registerUser.username}&password=${registerUser.password}&firstName=${registerUser.firstName}&lastName=${registerUser.lastName}`;
    return this.http.post<any>(url,formData);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
  }

}
