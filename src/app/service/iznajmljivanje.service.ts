import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIznajmljivanje } from '../model/IIznajmljivanje';


@Injectable({
  providedIn: 'root'
})
export class IznajmljivanjeService {

  private url = 'http://localhost:3000/';
  private prefixIznajmljivanje = 'iznajmljivanje';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IIznajmljivanje[]>{
    return this.http.get<IIznajmljivanje[]>(this.url + this.prefixIznajmljivanje);
  }

  getOne(id: number): Observable<IIznajmljivanje>{
    return this.http.get<IIznajmljivanje>(this.url + this.prefixIznajmljivanje + `/${id}`);
  }

  deleteOne(id: number): Observable<IIznajmljivanje>{
    return this.http.delete<IIznajmljivanje>(this.url + this.prefixIznajmljivanje + `/${id}`)
  }

  update(id: number, clan: IIznajmljivanje): Observable<IIznajmljivanje>{
    return this.http.put<IIznajmljivanje>(this.url + this.prefixIznajmljivanje + `/${id}`, clan)
  }

  save(novoIznaj): Observable<IIznajmljivanje>{
    return this.http.post<IIznajmljivanje>(this.url + this.prefixIznajmljivanje, novoIznaj)
  }
}
