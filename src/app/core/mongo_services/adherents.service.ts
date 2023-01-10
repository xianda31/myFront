import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  private _adherents !: Adherent[];
  private _loaded$ = new BehaviorSubject<number>(-1);

  get adherents$() : Observable<Adherent[]>{
      return this._adherents$.asObservable();
  }

  get loaded$(): Observable<number> {
    return this._loaded$.asObservable();
  }


  // READ

  getAdherentsFromServer() {
    this.http.get<Array<Adherent>>(`${api}/adherents`).pipe(
      tap((adherents )=> {
        this._adherents$.next(adherents);
        console.log("loading of %d lines",adherents.length);
        this._adherents = adherents ;
        this._loaded$.next(adherents.length);
      })
    ).subscribe();
  }

  // Update

  updateById(adherent : Adherent) {
    const foundIndex = this._adherents.findIndex((item) => item.adh_key === adherent.adh_key  ) ;
    if (foundIndex > -1) {
      this._adherents[foundIndex] = adherent;
      this._adherents$.next(this._adherents);
      console.log("maj");
        } else {

      console.log("gros malheur !!!", foundIndex,adherent);
      };


  }
}
