import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE_URL } from '../../../../variables';
import { GenreModel } from '../../../core/models/genre/genre.model';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private readonly _http: HttpClient) {}

  getAllGenres(): Observable<GenreModel[]> {
    return this._http.get<GenreModel[]>(`${API_BASE_URL}/api/genres`);
  }

  getGenreById(id: string): Observable<GenreModel> {
    return this._http.get<GenreModel>(`${API_BASE_URL}/api/genres/${id}`);
  }

  deleteGenre(id: string): Observable<void> {
    return this._http.delete<void>(`${API_BASE_URL}/api/genres/${id}`);
  }

  getGenresByGameKey(gameKey: string): Observable<GenreModel[]> {
    return this._http.get<GenreModel[]>(
      `${API_BASE_URL}/api/genres/games/${gameKey}/genres`
    );
  }
}
