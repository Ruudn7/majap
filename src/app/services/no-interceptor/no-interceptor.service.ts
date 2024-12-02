import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoInterceptorService {

  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }

  post<T>(url: string, body: any, options?: any) {
    return this.http.post<T>(url, body, options);
  }
  
}
