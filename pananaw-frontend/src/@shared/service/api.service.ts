import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  
export class ApiService {

  host = "http://127.0.0.1:5000/";

  constructor(private httpClient: HttpClient) {
      
  }

  get(url) {
    url = this.host + url;
    return this.httpClient.get(url);
  }

  put(url, data) {
    url = this.host + url;
    return this.httpClient.put(url, data);
  }

  post(url, data) {
    url = this.host + url;
    return this.httpClient.post<any>(url, data);
  }

  delete(url) {      
    url = this.host + url;
    return this.httpClient.delete(url);
  }

  // functions here
}

