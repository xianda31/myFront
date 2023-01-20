import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap,catchError, throwError} from 'rxjs';
import { Member, WhiteMember } from 'src/app/adherents/member.interface';
import { environment } from 'src/environments/environment';

const api = environment.server_api;

@Injectable({
  providedIn: 'root'
})
export class AdherentsService {

  constructor(private http: HttpClient) { }

  private _adherents$: BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>([]);
  private _adherents !: Member[];


  private _loaded$ = new BehaviorSubject<number>(-1);

  get adherents$(): Observable<Member[]> {
    return this._adherents$.asObservable();
  }

  get loaded$(): Observable<number> {
    return this._loaded$.asObservable();
  }


  // CREATE

  createAdherent(member: Member)  {
    console.log("posting @\/adherent",member)

    this.http.post<Member>(`${api}/adherent`, member).pipe (
      catchError(this.handleError)
     ).subscribe((member) => {
          this._adherents.unshift(member);
          this._adherents$.next(this._adherents);
     });
  }

  createLocalNewEntry() {
    this._adherents.unshift(WhiteMember);
    this._adherents$.next(this._adherents);
  }

  // READ

  getAdherentsFromServer() {
    this.http.get<Array<Member>>(`${api}/adherents`).pipe(
      tap((adherents) => {
        this._adherents$.next(adherents);
        this._adherents = adherents;
        this._loaded$.next(adherents.length);
      })
    ).subscribe();
  }



  // UPDATE

  updateById(member: Member) {
    const foundIndex = this._adherents.findIndex((item) => item._id === member._id  ) ;
    if (foundIndex > -1) {
      this._adherents[foundIndex] = member;
      this._adherents$.next(this._adherents);

      this.http.put<Member>(`${api}/adherent/${member._id}`,member).pipe(
        catchError(this.handleError)
      ).subscribe();
        } else {
      console.log("oups ! : gros malheur de sauvegarde ", foundIndex,member);
      };
  }

  // DELETE
  deleteById(member: Member) {
    const foundIndex = this._adherents.findIndex((item) => item._id === member._id  ) ;
    if (foundIndex > -1) {
      this._adherents.splice(foundIndex,1);
      this._adherents$.next(this._adherents);

      this.http.delete<Member>(`${api}/adherent/${member._id}`).pipe(
        catchError(this.handleError)
      ).subscribe();
        } else {
      console.log("oups ! : gros malheur de suppression ", foundIndex,member);
      };
  }






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
