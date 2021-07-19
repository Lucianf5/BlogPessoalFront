import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>("https://blogpessoalluci.herokuapp.com/postagens/buscar-todos", this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    let params = new HttpParams()
      .set('id', id)

    return this.http.get<Postagem>(`https://blogpessoalluci.herokuapp.com/postagens/buscar-id?${params}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    let params = new HttpParams()
      .set('titulo', titulo)

    return this.http.get<Postagem[]>(`https://blogpessoalluci.herokuapp.com/postagens/buscar-titulo?${params}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>("https://blogpessoalluci.herokuapp.com/postagens/cadastrar", postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>("https://blogpessoalluci.herokuapp.com/postagens/alterar", postagem, this.token)
  }

  deletePostagem(id: number) {
    let params = new HttpParams()
      .set('id', id)
      
    return this.http.delete(`https://blogpessoalluci.herokuapp.com/postagens/deletar?${params}`, this.token)
  }
}
