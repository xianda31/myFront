import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Adherent } from 'src/app/adherents/adherent.interface';
import { environment } from 'src/environments/environment';

const api = environment.server_api;

@Injectable({
  providedIn: 'root'
})
export class AdherentsService {
  private Adherents : Adherent[] = [];
  private Adherents$: BehaviorSubject<Adherent[]> = new BehaviorSubject<Adherent[]>(this.Adherents);


  constructor(private http:HttpClient) { }

  // READ

  private loadAdherents() {
    return this.http.get<Array<Adherent>>(`${api}/adherents`);
  };

  _getAdherents$():BehaviorSubject<Adherent[]> {
    this.loadAdherents().subscribe(
      (adh : Adherent[]) => {
        this.Adherents = adh ;
        this.Adherents$.next(adh);
    }
    );
    return this.Adherents$
  }
}
