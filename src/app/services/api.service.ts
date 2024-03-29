import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPeopleDetails(urlParameter: string): Observable<object> {
    return this.http.get(`${env.BASE_URL}` + urlParameter);
  }

  getElementByID(id: string): Observable<object> {
    return this.http.get(`${env.BASE_URL}/` + id);
  }
}
