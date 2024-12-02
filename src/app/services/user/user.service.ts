import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@app/interface/user';
import { environment } from 'src/environments/envirnonments';
import { NoInterceptorService } from '../no-interceptor/no-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private noTokenHttp: NoInterceptorService
  ) { }

  url = `${environment.apiUrl}/user`;

  saveUser(user: IUser): any {
    return this.noTokenHttp.post(this.url, user);
  }
  
}
