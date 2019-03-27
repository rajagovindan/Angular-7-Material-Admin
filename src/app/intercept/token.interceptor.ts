import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler, HttpEvent,HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../error-dialog/errordialog.service';

@Injectable() export class TokenInterceptor implements HttpInterceptor {

  constructor(private errorDialogService : ErrorDialogService) { }
  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    
    request = request.clone({ headers: request.headers.set('Access-Control-Allow-Credentials', 'true') });
    
    

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
            return event;
        }),
        catchError((error: HttpErrorResponse) => {
            let data = {};
            data = {
                reason: error && error.error.message ? error.error.reason : error.error.message,
                status: error.status
            };
            this.errorDialogService.openDialog(data);
            return throwError(error);
        }));
}
}
