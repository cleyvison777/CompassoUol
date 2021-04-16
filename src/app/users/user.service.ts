import { ErrorHandlerService } from './../core/error-handler.service';
import { CadUsers, Page } from './../core/model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';


export class Userfilter {
  login: string;
  page = 0;
  size = 5;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
 urlUsers = 'https://api.github.com/users';

  constructor(private http: HttpClient,
    private handleError: ErrorHandlerService)
   { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/vnd.github.v3+json' })


  }


    // Obtem todos os usuarios


  listUser(): Observable<CadUsers[]>{
    return this.http.get<CadUsers[]>(this.urlUsers)
     .pipe(
       retry(2),
       catchError(this.handleError.ahandleError))
  }




}
