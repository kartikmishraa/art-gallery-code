import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTWORKS_ENDPOINT } from '../constants/api.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getOnePage(page: number, limit: number): Observable<any> {
    return this.http.get(`${ARTWORKS_ENDPOINT}?page=${page}&limit=${limit}`);
  }
}
