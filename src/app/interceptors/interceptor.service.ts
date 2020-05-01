import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("paso interceptor");
    const headers = new HttpHeaders({
      "token-usuario":"ldajflkjsddddddddkjfdjfjkdfk"
    });
    const reqClone = req.clone({
      headers
    });
    return next.handle(reqClone)
              .pipe(
                catchError(this.manejarError)
              );
  }

  manejarError(error:HttpErrorResponse)
  {
      console.log(error);
      return throwError("error personalizado");
  }
}
