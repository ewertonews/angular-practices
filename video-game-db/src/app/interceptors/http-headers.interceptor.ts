import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '3035f0f9bemsh23df0b2ab74fd66p1b63f0jsn35255b74c6a7',
                'x-rapid-api-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '???'
            }
        })
        return next.handle(req);
    }
}