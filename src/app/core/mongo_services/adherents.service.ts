import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adherent } from 'src/app/adherents/adherent.interface';

const api = 'http://localhost:3000/bcsto';

@Injectable({
  providedIn: 'root'
})
export class AdherentsService {

  constructor(private http:HttpClient) { }

  getAdherentList() : number {    return 100 ;  }

  getAdherents() {

    return this.http.get<Array<Adherent>>(`${api}/adherents`) ;
  }


}
