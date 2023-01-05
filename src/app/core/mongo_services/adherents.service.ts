import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable,BehaviorSubject, tap } from 'rxjs';
import { Adherent } from 'src/app/adherents/adherent.interface';
import { environment } from 'src/environments/environment';

const api = environment.server_api;

@Injectable({
  providedIn: 'root'
})
export class AdherentsService {
 // private Adherents : Adherent[] = [];
 // private Adherents$: BehaviorSubject<Adherent[]> = new BehaviorSubject<Adherent[]>(this.Adherents);

 constructor(private http:HttpClient) { }

  private _adherents$: BehaviorSubject<Adherent[]> = new BehaviorSubject<Adherent[]>([]);
  private _loaded$ = new BehaviorSubject<number>(-1);

  get adherents$() : Observable<Adherent[]>{
      return this._adherents$.asObservable();
  }

  get loaded$(): Observable<number> {
    return this._loaded$.asObservable();
  }


  // READ


/*
  _getAdherents$():BehaviorSubject<Adherent[]> {
    this.loadAdherents().subscribe(
      (adh : Adherent[]) => {
        this.Adherents = adh ;
        this.Adherents$.next(adh);
    }
    );
    return this.Adherents$
  }
   private loadAdherents() {
    return this.http.get<Array<Adherent>>(`${api}/adherents`);
  };
*/
  getAdherentsFromServer() {
    this.http.get<Array<Adherent>>(`${api}/adherents`).pipe(
      tap((adherents )=> {
        this._adherents$.next(adherents);
        console.log("loading of %d lines",adherents.length);
        this._loaded$.next(adherents.length);
      })
    ).subscribe();
  }
}
