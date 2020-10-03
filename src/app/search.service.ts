import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient : HttpClient) { }

  getData(): Observable<User[]> { {
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
}
