import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IGallery } from "./gallery-interface";

@Injectable()
export class GalleryService {
  baseUrl = '../../assets/database.json';

  constructor(private http: Http) {
  }
  getData(): Observable<IGallery[]> {
    return this.http.get(this.baseUrl).map(items => {
      console.log('status: ', items.statusText);
      return items.json()
    });
  }
}
