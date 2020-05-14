import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IKnjiga } from '../model/IKnjiga';

@Injectable({
  providedIn: 'root'
})
export class KnjigaService {

  private url = 'http://localhost:3000/';
  private prefixKnjiga = 'knjiga';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IKnjiga[]>{
    return this.http.get<IKnjiga[]>(this.url + this.prefixKnjiga);
  }

  getOne(id: number): Observable<IKnjiga>{
    return this.http.get<IKnjiga>(this.url + this.prefixKnjiga + `/${id}`);
  }

  deleteOne(id: number): Observable<IKnjiga>{
    return this.http.delete<IKnjiga>(this.url + this.prefixKnjiga + `/${id}`)
  }

  update(id: number, clan: IKnjiga): Observable<IKnjiga>{
    return this.http.put<IKnjiga>(this.url + this.prefixKnjiga + `/${id}`, clan)
  }

  save(novaKnjiga): Observable<IKnjiga>{
    return this.http.post<IKnjiga>(this.url + this.prefixKnjiga, novaKnjiga)
  }
}
