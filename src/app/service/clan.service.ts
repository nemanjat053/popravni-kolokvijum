import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClan } from '../model/IClan';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  constructor( private http: HttpClient) { }

  private url = 'http://localhost:3000/';
  private clanPrefix = 'clan';

  getAll(): Observable<IClan[]>{
    return this.http.get<IClan[]>(this.url + this.clanPrefix);
  }

  getOne(id: number): Observable<IClan>{
    return this.http.get<IClan>(this.url + this.clanPrefix + `/${id}`);
  }

  deleteOne(id: number): Observable<IClan>{
    return this.http.delete<IClan>(this.url + this.clanPrefix + `/${id}`)
  }

  update(id: number, clan: IClan): Observable<IClan>{
    return this.http.put<IClan>(this.url + this.clanPrefix + `/${id}`, clan)
  }

  save(noviClan): Observable<IClan>{
    return this.http.post<IClan>(this.url + this.clanPrefix, noviClan)
  }
}
