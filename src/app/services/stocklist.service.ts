import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockResponse } from '../models/stocklist.models';

@Injectable({
  providedIn: 'root',
})
export class StocklistService {
  private baseUrl: string =
    'https://stoplight.io/mocks/aptem/interview---fese---stock-list/343347731';

  constructor(private httpClient: HttpClient) {}

  public getStock(): Observable<StockResponse> {
    return this.httpClient.get<StockResponse>(`${this.baseUrl}/stock`);
  }
}
