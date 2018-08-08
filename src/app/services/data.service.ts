import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  searchLimit = '5';
  searchSRT = 'LINK DE DESCARGA';
  BASE_URL = 'http://api.soundcloud.com/tracks?linked_partitioning=1';
  CLIENT_ID = 'e59d8b005900e38649c1882b87cd828d'

  getTracks() {
    return this.http.get(`${this.BASE_URL}&client_id=${this.CLIENT_ID}&q=${this.searchSRT}&limit=${this.searchLimit}`, {});
  }

}
