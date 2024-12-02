import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/envirnonments';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  url = `${environment.apiUrl}/blog`;

  getBlog(): any {
    return this.http.get(this.url);
  }
  
}
