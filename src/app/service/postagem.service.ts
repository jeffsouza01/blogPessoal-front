import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})

export class PostagemService {

  apiURL: string = 'http://localhost:8090/postagem'
  constructor(
    private http: HttpClient
  ) { }

  token = {
    header: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.apiURL, this.token);
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`http://localhost:8090/postagem/${id}`)
  }

  newPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('http://localhost:8090/postagem', postagem, this.token);
  }

  updatePostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('http://localhost:8090/postagem', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8090/postagem/${id}`)
  }
}
