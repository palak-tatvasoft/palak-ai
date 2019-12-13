import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HitsEntity } from '../model/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://hn.algolia.com/api/v1/search_by_date?tags=story";
  constructor(private http: HttpClient) {
    console.log("PostService");
   }

  getPostData(): Observable<HitsEntity[]> {
    return this.http.get<HitsEntity[]>(this.url);
  }
}
