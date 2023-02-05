import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap,catchError, throwError} from 'rxjs';
import { Member, WhiteMember } from 'src/app/adherents/member.interface';
import { environment } from 'src/environments/environment';

const _API = environment.server_api;


type Team = string[];


@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  tournament !: Team[] ;

  constructor(private http: HttpClient) { }


  // CREATE



  // READ

  getTournamentFromServer() : Observable<Team[]> {

    return this.http.get<Team[]>(`${_API}/tournament?fname=export_team`)
  }



  // UPDATE


  // DELETE




  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
