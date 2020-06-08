import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor{
    intercept(request:HttpRequest<any>,next:HttpHandler){
        let manipulatedReq = request.clone({headers : request.headers.append('new','test')})
        return next.handle(manipulatedReq);
    }
}