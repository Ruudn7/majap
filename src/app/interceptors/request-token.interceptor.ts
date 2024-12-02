import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const requestInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>, 
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log('Funkcyjny Interceptor działa');
  const clone = req.clone({
    setHeaders: {
         Authorization: `Bearer token`
    }
  })
  return next(clone);
};