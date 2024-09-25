import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Musica {
  id: number;
  titulo: string;
  artista: string;
  album: string;
  ano: number;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class MusicasService {
  private apiUrl = 'http://localhost:3000/musicas';

  constructor(private http: HttpClient) { }

  getMusicas(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.apiUrl);
  }

  deleteMusica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
