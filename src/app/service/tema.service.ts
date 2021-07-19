import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalluci.herokuapp.com/temas/buscar-todos', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    let params = new HttpParams()
      .set('id', id)

    return this.http.get<Tema>(`https://blogpessoalluci.herokuapp.com/temas/buscar-id?${params}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoalluci.herokuapp.com/temas/cadastrar', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoalluci.herokuapp.com/temas/alterar', tema, this.token)
  }

  deleteTema(id: number){
    let params = new HttpParams()
      .set('id', id)

    return this.http.delete(`https://blogpessoalluci.herokuapp.com/temas/deletar?${params}`, this.token)
  }
}
