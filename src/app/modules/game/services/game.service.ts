import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE_URL } from '../../../../variables';
import { GameModel } from '../../../core/models/game/game.model';
import { CreateGameModel } from '../../../core/models/game/create-game.model';
import { UpdateGameModel } from '../../../core/models/game/update-game.model';

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

  downloadGame(key: string): Observable<Blob> {
    return this._http.get(`${API_BASE_URL}/api/games/${key}/file`, {
      responseType: 'blob',
    });
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
}
