import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  _url = "http://190.60.101.59:6003/api/Personas/0"
  // _url = "http://190.60.101.59:6003/api/Personas/"
  _urlPost = "http://190.60.101.59:6003/api/personas/"
  // _url = "https://jsonplaceholder.typicode.com/users?id=11"
  constructor(
    private http: HttpClient
  ) { }


  postRequestRegistroUsers(data?: any) {

    const headers = new HttpHeaders().set('Type-content', 'aplication/json')


    return this.http.post(this._urlPost, data, { headers: headers });
  }

  getRequestUsers() {

    const headers = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get(this._url, { headers: headers });
  }

  deleteRequestUser(id?: any) {

    const headers = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.delete(this._urlPost + id, { headers: headers });

  }


}


