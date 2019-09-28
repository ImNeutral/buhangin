import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
export class ApiService {

  host = "http://localhost:5000/";

  constructor(private httpClient: HttpClient) {
      
  }

  get(url) {
    url = this.host + url;
    return this.httpClient.get(url).subscribe();
  }

  put(url, data) {
    url = this.host + url;
    return this.httpClient.put(url, data).subscribe();
  }

  post(url, data) {
    url = this.host + url;
    return this.httpClient.post(url, data).subscribe();
  }

  delete(url) {      
    url = this.host + url;
    return this.httpClient.delete(url).subscribe();
  }

  // functions here
}

