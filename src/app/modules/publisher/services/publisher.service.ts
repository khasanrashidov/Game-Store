import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE_URL } from '../../../../variables';
import { PublisherModel } from '../../../core/models/publisher/publisher.model';
import { CreatePublisherModel } from '../../../core/models/publisher/create-publisher.model';
import { UpdatePublisherModel } from '../../../core/models/publisher/update-publisher.model';

@Injectable({
  providedIn: 'root',
})
export class PublisherService {
  constructor(private readonly _http: HttpClient) {}

  getAllPublishers(): Observable<PublisherModel[]> {
    return this._http.get<PublisherModel[]>(`${API_BASE_URL}/api/publishers`);
  }

  getPublisherByCompanyName(companyName: string): Observable<PublisherModel> {
    return this._http.get<PublisherModel>(
      `${API_BASE_URL}/api/publishers/${companyName}`
    );
  }

  getPublisherByGameKey(gameKey: string): Observable<PublisherModel> {
    return this._http.get<PublisherModel>(
      `${API_BASE_URL}/api/publishers/games/${gameKey}/publisher`
    );
  }

  deletePublisher(id: string): Observable<void> {
    return this._http.delete<void>(`${API_BASE_URL}/api/publishers/${id}`);
  }

  createPublisher(
    createPublisherModel: CreatePublisherModel
  ): Observable<PublisherModel> {
    return this._http.post<PublisherModel>(
      `${API_BASE_URL}/api/publishers`,
      createPublisherModel
    );
  }

  updatePublisher(
    updatePublisherModel: UpdatePublisherModel
  ): Observable<void> {
    return this._http.put<void>(
      `${API_BASE_URL}/api/publishers`,
      updatePublisherModel
    );
  }
}
