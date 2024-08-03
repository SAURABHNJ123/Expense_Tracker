import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthInterseptor implements HttpInterceptor{
     
    constructor(private login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add Jwt Token (Local Storage) Request
        let authreq=req;
        const token=this.login.getToken();
        if(token!=null){
            authreq=authreq.clone({
              setHeaders:{Authorization:`Bearer ${token}`},
            });
        }
        
        return next.handle(authreq);
    }
}

export const authInterceptorProvider=[{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterseptor,
    multi:true

}];
