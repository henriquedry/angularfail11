import { Observable } from 'rxjs/Rx';
import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'util';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Funcionour");
        return next.handle(req).catch((error,caught) => {
            return Observable.throw(
            
                alert(this.mensagem(error.status))
            
            ) ;
        }) as any;
    }

    mensagem(cod : number) : string{
        console.log(cod);

    switch(cod){
        case 401:
            return "Você não possui acesso";
        default:
            return "Erro default";
    }
    }
}
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
}