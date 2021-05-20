import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Register, User} from "../model/User";

@Injectable()
export class DashboardService {

  protected baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  getPersonalDetails(username: string | null){
    const url = `${this.baseUrl}/personal_details/v1.0/person/${username}`;
    return this.http.get<any>(url);
  }
}
