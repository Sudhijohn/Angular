import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LogInterceptor implements HttpInterceptor {
    intercept(request:HttpRequest<any>,next:HttpHandler){
        return next.handle(request).pipe(tap((event)=>{
            console.log('From Interceptor',request);
            console.log(event);
        }) )
    }
}