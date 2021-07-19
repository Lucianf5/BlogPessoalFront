import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdUser(id: number): Observable<Usuario> {
    let params = new HttpParams()
      .set('id', id)

    return this.http.get<Usuario>(`https://blogpessoalluci.herokuapp.com/usuarios/buscar-id?${params}`, this.token)
  }

  putUser(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://blogpessoalluci.herokuapp.com/usuarios/alterar', user, this.token)
  }

}
