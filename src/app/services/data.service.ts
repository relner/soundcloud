import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { TracksCollection } from '../models/models';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  searchLimit = '5';
  BASE_URL = 'http://api.soundcloud.com/tracks?linked_partitioning=1';
  CLIENT_ID = 'e59d8b005900e38649c1882b87cd828d'

  getTracks(searchSRT): Observable<TracksCollection> {
    return this.http.get<TracksCollection>(`${this.BASE_URL}&client_id=${this.CLIENT_ID}&q=${searchSRT}&limit=${this.searchLimit}`);
  }
  
  addNextPage(pageData): Observable<TracksCollection>{
    return this.http.get<TracksCollection>(pageData);
  }

}
