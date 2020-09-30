import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient : HttpClient) { }

  getData() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
