import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable()
export class ImageInterceptor implements HttpInterceptor {

  constructor(
    @Inject('baseUrl') private baseUrl: string,
    @Inject('accessKey') private accessKey: string
  ) {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = request.headers.append('Authorization', `Client-ID ${this.accessKey}`)
    const jsonReq = request.clone({
      headers,
      url: `${this.baseUrl}${request.url}`
    })
    return next.handle(jsonReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event.clone({body: event.body.data})
        }
        return event;
      })
    )
  }
}
