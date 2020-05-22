import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class FetchDataService {

  constructor(private http: HttpClient) { }
  fetchTopMessage() {
    return this.http.get('https://www.reddit.com/r/all.json?limit=1');
  }

  fetchMostPopular() {
    return this.http.get('https://www.reddit.com/subreddits/popular.json');
  }
}