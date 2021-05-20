import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {Details, Education, Register, User} from "../model/User";

@Injectable()
export class DetailsService {

  protected baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) {
  }

  getAllInformationDetails(username: string | null){
    const url = `${this.baseUrl}/personal_details/v1.0/all-info/${username}`;
    return this.http.get<any>(url);
  }

  postEducationDetails(education: any ){
    const url = `${this.baseUrl}/education`;
    return this.http.post<any>(url,education);
  }

  updateAllInformationDetails(details: Details ){
    const url = `${this.baseUrl}/personal_details/v1.0/all-info`;
    return this.http.put<any>(url,details);
  }
}
