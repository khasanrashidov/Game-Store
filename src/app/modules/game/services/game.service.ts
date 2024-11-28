import { map, Observable } from 'rxjs';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE_URL } from '../../../../variables';
import { GameModel } from '../../../core/models/game/game.model';
import { CreateGameModel } from '../../../core/models/game/create-game.model';
import { UpdateGameModel } from '../../../core/models/game/update-game.model';
import saveAs from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor(private readonly _http: HttpClient) {}

  getAllGames(): Observable<GameModel[]> {
    return this._http.get<GameModel[]>(`${API_BASE_URL}/api/games`);
  }

  getGameById(id: string): Observable<GameModel> {
    return this._http.get<GameModel>(`${API_BASE_URL}/api/games/find/${id}`);
  }

  getGameByKey(key: string): Observable<GameModel> {
    return this._http.get<GameModel>(`${API_BASE_URL}/api/games/${key}`);
  }

  downloadGame(key: string): Observable<HttpResponse<Blob>> {
    return this._http
      .get(`${API_BASE_URL}/api/games/${key}/file`, {
        responseType: 'blob',
        observe: 'response',
      })
      .pipe(
        map((response) => {
          const filename = this.getFileNameFromContentDisposition(
            response.headers.get('content-disposition') || '',
            'txt'
          );

          const blob = new Blob([response.body as BlobPart], {
            type:
              response.headers.get('content-type') ||
              'application/octet-stream',
          });

          saveAs(blob, filename);

          return new HttpResponse({
            body: blob,
            headers: response.headers,
            status: response.status,
            statusText: response.statusText,
          });
        })
      );
  }

  getGamesByGenreId(genreId: string): Observable<GameModel[]> {
    return this._http.get<GameModel[]>(
      `${API_BASE_URL}/api/games/genres/${genreId}/games`
    );
  }

  getGamesByPlatformId(platformId: string): Observable<GameModel[]> {
    return this._http.get<GameModel[]>(
      `${API_BASE_URL}/api/games/platforms/${platformId}/games`
    );
  }

  getGamesByPublisherCompanyName(companyName: string): Observable<GameModel[]> {
    return this._http.get<GameModel[]>(
      `${API_BASE_URL}/api/games/publishers/${companyName}/games`
    );
  }

  deleteGame(key: string): Observable<void> {
    return this._http.delete<void>(`${API_BASE_URL}/api/games/${key}`);
  }

  createGame(createGameModel: CreateGameModel): Observable<GameModel> {
    return this._http.post<GameModel>(
      `${API_BASE_URL}/api/games`,
      createGameModel
    );
  }

  updateGame(updateGameModel: UpdateGameModel): Observable<GameModel> {
    return this._http.put<GameModel>(
      `${API_BASE_URL}/api/games`,
      updateGameModel
    );
  }

  private getFileNameFromContentDisposition(
    contentDisposition: string,
    defaultType: string
  ): string {
    const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
      contentDisposition
    );

    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }

    return 'Game.' + defaultType;
  }
}
