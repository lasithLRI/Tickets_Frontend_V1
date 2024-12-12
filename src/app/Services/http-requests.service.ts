import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http:HttpClient) { }

  sendConfigurations(configData:any):Observable<any>{
    return this.http.post("http://localhost:8080/config",configData)
  }
}
