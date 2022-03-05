import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vagas } from '../models/vagas.model';

@Injectable({
  providedIn: 'root'
})
export class VagasServiceService {
  baseURL = "http://localhost:3000/vagas"
  constructor(private http: HttpClient) { }

  //operações de CRUD (Criação, Alteração, Leitura e Exclusão de dados)

  //criação de uma vaga
  create(dados : Vagas) : Observable<Vagas> {
    return this.http.post<Vagas>(this.baseURL,dados);
  }
  //leitura de vagas
  read() : Observable<Vagas[]> {
    return this.http.get<Vagas[]>(this.baseURL);
  }
  //leitura de uma vaga especifica
  readById(id : number) : Observable<Vagas> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Vagas>(url); 
  }
  //alteração de vagas
  updateVagas(dados: Vagas) : Observable<Vagas> {
    const url = `${this.baseURL}/${dados.id}`;
    return this.http.put<Vagas>(url,dados);
  }
  //exclusaãod e uma vaga especifica
  deleteVagas(id : number) : Observable<Vagas> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete<Vagas>(url); 
  }
}
