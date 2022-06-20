import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

export const apiBase = environment.API_ENDPOINT;

function getToken() {
  return localStorage.getItem('token')
}

@Injectable({
  providedIn: 'root'
})
export class RestApiBaseService {

  retry = 3;

  constructor(
    private http: HttpClient
  ) { }

  getHeaders() {
    const token = getToken();
    return token ? new HttpHeaders().set("Authorization", token) : new HttpHeaders();
  }
  
  get(link: string) {
    return this.http.get(apiBase + link, { headers: this.getHeaders() })
      .pipe(
        retry(this.retry),
        catchError(this.handleError)
      )
  }
  
  post(link: string, body: any) {
    return this.http.post(apiBase + link, body, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      )
  }
  
  put(link: string, body: any) {
    return this.http.put(apiBase + link, body, { headers: this.getHeaders() })
      .pipe(
        retry(this.retry),
        catchError(this.handleError)
      )
  }
  
  delete(link: string) {
    return this.http.delete(apiBase + link, { headers: this.getHeaders() })
      .pipe(
        retry(this.retry),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => error);
  }
}
