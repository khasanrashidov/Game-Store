import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE_URL } from '../../../../variables';
import { PlatformModel } from '../../../core/models/platform/platform.model';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  constructor(private readonly _http: HttpClient) {}

  getAllPlatforms(): Observable<PlatformModel[]> {
    return this._http.get<PlatformModel[]>(`${API_BASE_URL}/api/platforms`);
  }

  getPlatformById(id: string): Observable<PlatformModel> {
    return this._http.get<PlatformModel>(`${API_BASE_URL}/api/platforms/${id}`);
  }

  deletePlatform(id: string): Observable<void> {
    return this._http.delete<void>(`${API_BASE_URL}/api/platforms/${id}`);
  }

  getPlatformsByGameKey(gameKey: string): Observable<PlatformModel[]> {
    return this._http.get<PlatformModel[]>(
      `${API_BASE_URL}/api/platforms/games/${gameKey}/platforms`
    );
  }
}
