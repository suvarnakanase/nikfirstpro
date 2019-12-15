import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
  http = "https://jsonplaceholder.typicode.com/posts";
  constructor(public httpvar : HttpClient) {}

  httpfunction(){
    return this.httpvar.get(this.http);
  }
}
